// Adapted from Next.js's blog starter example: https://github.com/vercel/next.js/tree/canary/examples/blog-starter

import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";
import remarkSmartypants from "@silvenon/remark-smartypants";
import retext from "retext";
import retextSmartypants from "retext-smartypants";

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkSmartypants)
    .use(highlight)
    .use(html)
    .process(markdown);
  return result.toString();
}

export async function markdownToHtmlSnippet(markdown) {
  const html = await markdownToHtml(markdown);
  // Remove <p> tags
  return html.substring(3, html.length - 5);
}

export function smartypants(text) {
  if (!text) return undefined;
  const result = retext()
    .use(retextSmartypants)
    .processSync(text);
  return result.toString();
}
