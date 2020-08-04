/**
 * Copyright 2020 Tyler Westin Mick
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
