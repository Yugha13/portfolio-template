const fs = require('fs');
let data = fs.readFileSync('/Users/Developer/portfolio/src/data/resume.tsx', 'utf8');
data = data.replace('hackathons: [] as any,', 'hackathons: [] as { title: string, dates: string, location: string, description: string, image: string, links: { title: string, icon: any, href: string }[] }[],');
fs.writeFileSync('/Users/Developer/portfolio/src/data/resume.tsx', data);
