import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('1-800-HCC-STRAT')) {
    content = content.replace(/1-800-HCC-STRAT/g, '+1 (403) 359-4972');
    changed = true;
  }
  if (content.includes('tel:18004227872')) {
    content = content.replace(/tel:18004227872/g, 'tel:+14033594972');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
