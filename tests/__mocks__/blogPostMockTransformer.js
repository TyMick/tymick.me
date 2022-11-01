const path = require("path");
const { fromUnixTime } = require("date-fns");

/** @type {import("@jest/transform").Transformer} */
module.exports = {
  process(sourceText, sourcePath, ...rest) {
    const slug = path.basename(sourcePath, ".mdx");
    /** @type {import("../../lib/blog-api").BlogPostMetadata} */
    const blogPostMock = {
      metadata: {
        slug,
        title: slug + " title",
        subtitle: slug + " subtitle",
        description: slug + " description",
        excerpt: slug + " excerpt",
        date: getSimpleDateHash(slug),
      },
    };
    return {
      code: `module.exports = ${JSON.stringify(blogPostMock)}`,
    };
  },
};

/**
 * @param {string} source
 * @returns {string}
 */
function getSimpleDateHash(source) {
  let int = 0;
  for (let i = 0; i < source.length; i++) {
    int += source.charCodeAt(i);
  }
  return fromUnixTime(int * 100000).toISOString();
}
