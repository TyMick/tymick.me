const path = require("path");

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
        date: new Date().toISOString(),
      },
    };
    return {
      code: `module.exports = ${JSON.stringify(blogPostMock)}`,
    };
  },
};
