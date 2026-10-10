import fs from 'fs';
import path from 'path';

function processFile(htmlPath, tsxPath, routeName, componentName) {
  let html = fs.readFileSync(htmlPath, 'utf8');

  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.error("Could not find <main> in HTML: " + htmlPath);
    return;
  }

  let jsx = mainMatch[1];

  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':');
      if (!key || !value) return;
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelKey] = value.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, (match) => `{/* ${match.slice(4, -3)} */}`);
  jsx = jsx.replace(/required=""/g, 'required');
  jsx = jsx.replace(/rows="(\d+)"/g, 'rows={$1}');
  jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
  jsx = jsx.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  jsx = jsx.replace(/viewbox=/g, 'viewBox=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/onclick="([^"]*)"/g, (match, handler) => {
      return `onClick={() => { /* ${handler} */ }}`;
  });
  jsx = jsx.replace(/onsubmit="([^"]*)"/g, (match, handler) => {
      return `onSubmit={(e) => { e.preventDefault(); /* ${handler} */ }}`;
  });

  jsx = jsx.replace(/<script>[\s\S]*?<\/script>/g, '');

  const template = `import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('${routeName}')({
  component: ${componentName},
})

function ${componentName}() {
  return (
    <>
      <main className="w-full pt-20 bg-background">
${jsx}
      </main>
    </>
  )
}
`;

  fs.writeFileSync(tsxPath, template);
  console.log("Successfully converted and updated " + tsxPath);
}

const baseDir = process.cwd();

processFile(
  path.join(baseDir, 'contact_temp.html'),
  path.join(baseDir, 'src', 'routes', 'contact.tsx'),
  '/contact',
  'Contact'
);

processFile(
  path.join(baseDir, 'insights_temp.html'),
  path.join(baseDir, 'src', 'routes', 'insights.tsx'),
  '/insights',
  'Insights'
);

processFile(
  path.join(baseDir, 'sectors_temp.html'),
  path.join(baseDir, 'src', 'routes', 'sectors.tsx'),
  '/sectors',
  'Sectors'
);
