const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'stitch_holistic_concept_consulting_website');
const targetDir = path.join(__dirname, 'src', 'routes');

const mapFolderToRoute = {
  'home_holistic_concept_consulting': 'index.tsx',
  'about_us_holistic_concept_consulting': 'about.tsx',
  'executive_zenith': 'executive-zenith.tsx',
  'services_hr_strategy_training_holistic_concept_consulting': 'services.hr-strategy-training.tsx',
  'services_investigations_holistic_concept_consulting': 'services.investigations.tsx',
  'services_negotiation_process_serving_holistic_concept_consulting': 'services.negotiation-process-serving.tsx',
  'services_policies_accessibility_holistic_concept_consulting': 'services.policies-accessibility.tsx'
};

function convertHtmlToReact(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let bodyContent = mainMatch ? mainMatch[1] : html;

  bodyContent = bodyContent
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/<(img|hr|br|input|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />')
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
    .replace(/style="([^"]*)"/g, (match, styleString) => {
      const styleObj = styleString.split(';').filter(Boolean).map(s => {
        const [k, v] = s.split(':').map(x => x ? x.trim() : '');
        if (!k || !v) return '';
        const camelK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelK}: '${v.replace(/'/g, "\\'")}'`;
      }).filter(Boolean).join(', ');
      return `style={{ ${styleObj} }}`;
    })
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/viewbox/g, 'viewBox')
    .replace(/tabindex/g, 'tabIndex')
    .replace(/autocomplete/g, 'autoComplete')
    .replace(/onclick="[^"]*"/g, 'onClick={() => {}}')
    .replace(/onsubmit="[^"]*"/g, 'onSubmit={(e) => e.preventDefault()}');

  return bodyContent;
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

Object.keys(mapFolderToRoute).forEach(folder => {
  const routeFile = mapFolderToRoute[folder];
  const htmlPath = path.join(sourceDir, folder, 'code.html');
  
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const jsxContent = convertHtmlToReact(htmlContent);
    
    const routeName = routeFile === 'index.tsx' ? '/' : `/${routeFile.replace('.tsx', '').replace(/\./g, '/')}`;
    const componentName = folder.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

    const template = `import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('${routeName}')({
  component: ${componentName},
})

function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  )
}
`;

    fs.writeFileSync(path.join(targetDir, routeFile), template);
    console.log(`Converted ${folder} to ${routeFile}`);
  }
});
