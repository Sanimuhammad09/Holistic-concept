import fs from 'fs';
import path from 'path';

const routesDir = path.join(process.cwd(), 'src', 'routes');
const filesToProcess = [
  'about.tsx',
  'contact.tsx',
  'insights.tsx',
  'sectors.tsx',
  'services.hr-strategy-training.tsx',
  'services.investigations.tsx',
  'services.negotiation-process-serving.tsx',
  'services.policies-accessibility.tsx'
];

const seoData = {
  'about.tsx': { title: 'About Us | Holistic Concept Consulting', desc: 'Meet our team of experts dedicated to ethical governance, investigative rigor, and strategic advisory.' },
  'contact.tsx': { title: 'Contact Us | Holistic Concept Consulting', desc: 'Initiate a confidential strategic consultation with Holistic Concept Consulting.' },
  'insights.tsx': { title: 'Insights & Research | Holistic Concept Consulting', desc: 'Read our latest insights, case studies, and regulatory updates on governance and compliance.' },
  'sectors.tsx': { title: 'Sectors We Serve | Holistic Concept Consulting', desc: 'Providing tailored advisory services for public sector agencies, private enterprises, and non-profit organizations.' },
  'services.hr-strategy-training.tsx': { title: 'HR Strategy & Training | Holistic Concept Consulting', desc: 'Expert human resources strategy, organizational restructuring, and executive leadership training.' },
  'services.investigations.tsx': { title: 'Workplace Investigations | Holistic Concept Consulting', desc: 'Impartial, forensic-level workplace investigations and confidential whistleblower disclosures.' },
  'services.negotiation-process-serving.tsx': { title: 'Negotiation & Process Serving | Holistic Concept Consulting', desc: 'High-stakes contract resolution, mediation, and specialized legal process serving.' },
  'services.policies-accessibility.tsx': { title: 'Policies & Accessibility | Holistic Concept Consulting', desc: 'Comprehensive regulatory compliance, AODA/ADA accessibility plans, and corporate policy architecture.' }
};

for (const file of filesToProcess) {
  const filePath = path.join(routesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already processed
  if (content.includes('AnimatedSection') && content.includes('SEO')) {
    console.log(`Skipping ${file}, already processed.`);
    continue;
  }

  // Add imports
  if (!content.includes(`import { AnimatedSection }`)) {
    content = content.replace(/(import .*?\n)+/, `$&import { AnimatedSection } from '../components/AnimatedSection'\nimport { SEO } from '../components/SEO'\n`);
  }
  
  // If there are no imports at the top at all (unlikely), add manually
  if (!content.includes('import { AnimatedSection }')) {
    content = `import { AnimatedSection } from '../components/AnimatedSection'\nimport { SEO } from '../components/SEO'\n` + content;
  }

  // Add SEO Component inside main
  const data = seoData[file];
  if (data) {
    const seoTag = `\n      <SEO title="${data.title}" description="${data.desc}" />`;
    content = content.replace(/(<main[^>]*>)/, `$1${seoTag}`);
  }

  // Replace <section className="..."> with <AnimatedSection direction="up" delay={0.1} className="...">
  // Only replace sections that are not the hero (hero usually doesn't need heavy scroll animation, or we can animate it).
  // Actually, replacing all <section> is fine.
  content = content.replace(/<section\s+(className="[^"]*")/g, '<AnimatedSection direction="up" delay={0.1} $1');
  content = content.replace(/<\/section>/g, '</AnimatedSection>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
}
