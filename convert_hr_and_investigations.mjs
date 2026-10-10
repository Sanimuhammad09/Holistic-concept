import fs from 'fs';
import path from 'path';

function processFile(htmlPath, tsxPath) {
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Extract main content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.error("Could not find <main> in HTML: " + htmlPath);
    return;
  }

  let jsx = mainMatch[1];

  // Convert HTML to JSX
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

  // Remove raw script blocks from the extracted main section
  jsx = jsx.replace(/<script>[\s\S]*?<\/script>/g, '');

  let tsx = fs.readFileSync(tsxPath, 'utf8');

  const returnMatch = tsx.match(/return\s*\(\s*<>\s*([\s\S]*?)\s*<\/>\s*\)/);
  if (returnMatch) {
      tsx = tsx.replace(returnMatch[0], `return (\n    <>\n      <main className="w-full pt-20 bg-background">\n${jsx}\n      </main>\n    </>\n  )`);
  } else {
      const fallbackMatch = tsx.match(/return\s*\([\s\S]*?\)\s*(?:}|function)/);
      if (fallbackMatch) {
          const isEndBrace = fallbackMatch[0].endsWith('}');
          tsx = tsx.replace(fallbackMatch[0], `return (\n    <>\n      <main className="w-full pt-20 bg-background">\n${jsx}\n      </main>\n    </>\n  )\n${isEndBrace ? '}' : 'function'}`);
      } else {
          console.error("Could not find return statement in tsx: " + tsxPath);
          return;
      }
  }

  fs.writeFileSync(tsxPath, tsx);
  console.log("Successfully converted and updated " + tsxPath);
}

const baseDir = process.cwd();

// HR
processFile(
  path.join(baseDir, 'stitch_holistic_concept_consulting_website', 'services_hr_strategy_training_holistic_concept_consulting', 'code.html'),
  path.join(baseDir, 'src', 'routes', 'services.hr-strategy-training.tsx')
);

// Investigations
processFile(
  path.join(baseDir, 'stitch_holistic_concept_consulting_website', 'services_investigations_holistic_concept_consulting', 'code.html'),
  path.join(baseDir, 'src', 'routes', 'services.investigations.tsx')
);
