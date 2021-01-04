const remarkHighlight = require("remark-highlight.js");
const remarkSmartypants = require("@silvenon/remark-smartypants");

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [remarkHighlight, remarkSmartypants],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "tsx", "mdx"],
  images: {
    domains: ["pbs.twimg.com"],
  },
});
