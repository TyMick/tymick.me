// Adapted from Next.js's blog starter example: https://github.com/vercel/next.js/tree/canary/examples/blog-starter

import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(highlight)
    .use(html)
    .process(markdown);
  return result.toString();
}
