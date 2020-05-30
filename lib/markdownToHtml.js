/**
 * From Next.js's blog starter example: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */

import remark from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .process(markdown);
  return result.toString();
}
