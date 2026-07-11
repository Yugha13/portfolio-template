const fs = require('fs');
const path = require('path');

const srcDir = '/Users/Developer/me/portfolio/src/data/blog';
const destDir = '/Users/Developer/portfolio/content';

// Clear existing blogs
if (fs.existsSync(destDir)) {
  fs.readdirSync(destDir).forEach(file => {
    fs.unlinkSync(path.join(destDir, file));
  });
} else {
  fs.mkdirSync(destDir, { recursive: true });
}

// Get 8 blogs from source
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.mdx')).slice(0, 8);

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  
  // Basic frontmatter extraction
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (match) {
    const frontmatter = match[1];
    const restContent = content.slice(match[0].length);
    
    // Extract fields
    const getField = (field) => {
      const regex = new RegExp(`^${field}:\\s*(['"]?)(.*?)\\1$`, 'm');
      const m = frontmatter.match(regex);
      return m ? m[2] : '';
    };
    
    const title = getField('title') || file.replace('.mdx', '').replace(/-/g, ' ');
    const date = getField('date') || new Date().toISOString().split('T')[0];
    const description = getField('description') || 'A blog post about ' + title;
    const image = getField('image') || '';
    
    const newFrontmatter = `---
title: "${title}"
publishedAt: "${date}"
summary: "${description}"
image: "${image}"
---`;

    const newContent = newFrontmatter + restContent;
    fs.writeFileSync(path.join(destDir, file), newContent);
  } else {
    // If no frontmatter, just copy
    fs.writeFileSync(path.join(destDir, file), content);
  }
});
console.log("Successfully copied 8 blogs and transformed their frontmatter.");
