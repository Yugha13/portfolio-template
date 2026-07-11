const fs = require('fs');
let data = fs.readFileSync('/Users/Developer/portfolio/src/data/resume.tsx', 'utf8');
data = data.replace(/links: \[\]/g, 'links: [] as any[]');
fs.writeFileSync('/Users/Developer/portfolio/src/data/resume.tsx', data);
