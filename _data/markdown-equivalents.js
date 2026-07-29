/**
 * Markdown Equivalents Plugin for sn.jace.pro
 * 
 * Generates .md versions of documentation pages for LLM consumption.
 * Since source files are already markdown, we copy them with AI-friendly frontmatter.
 */
import fs from 'fs';
import path from 'path';

export function markdownEquivalentsPlugin(eleventyConfig) {
  eleventyConfig.on('eleventy.after', async ({ dir, results }) => {
    const outputDir = dir.output || '_site';
    let count = 0;

    for (const result of results) {
      // Skip non-documentation pages
      if (!result.inputPath) continue;
      
      // Only process .md source files (documentation)
      if (!result.inputPath.endsWith('.md')) continue;
      
      // Skip special files
      if (result.inputPath.includes('AGENTS.md')) continue;
      if (result.inputPath.includes('README.md')) continue;
      if (result.inputPath.includes('hello-post.md')) continue;
      
      // Get the output URL and create .md equivalent path
      const url = result.url;
      if (!url || url === '/') continue;
      
      // Remove trailing slash and add .md
      const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
      const mdOutputPath = path.join(outputDir, `${cleanUrl}.md`);
      
      // Read the original markdown source
      let sourceContent;
      try {
        sourceContent = fs.readFileSync(result.inputPath, 'utf-8');
      } catch (err) {
        continue;
      }
      
      // Parse existing frontmatter
      const frontmatterMatch = sourceContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      let title = '';
      let description = '';
      let body = sourceContent;
      
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        body = frontmatterMatch[2];
        
        // Extract title and description
        const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
        const descMatch = frontmatter.match(/^description:\s*(.+)$/m);
        if (titleMatch) title = titleMatch[1];
        if (descMatch) description = descMatch[1];
      }
      
      // Build the AI-optimized markdown
      const fullUrl = `https://sn.jace.pro${url}`;
      const mdContent = `---
original_url: "${fullUrl}"
format: markdown
ai_optimized: true
title: "${title}"
description: "${description}"
---

# ${title}

${body.trim()}

---

*Source: [${fullUrl}](${fullUrl}) - ServiceNow Documentation by Jace Benson*
`;

      // Ensure directory exists
      const mdDir = path.dirname(mdOutputPath);
      fs.mkdirSync(mdDir, { recursive: true });
      
      // Write the markdown file
      fs.writeFileSync(mdOutputPath, mdContent);
      count++;
    }

    console.log(`[markdown-equivalents] Generated ${count} markdown files for LLM consumption`);
  });
}
