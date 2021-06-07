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
  async redirects() {
    return [
      {
        source: "/beverages",
        destination:
          "https://workflowy.com/s/beverages-id-enjoy-a/sDeB5YcOcO6syrRE",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/connect",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/console-log-after-reload",
        destination: "/blog/console-log-after-reload",
        permanent: true,
      },
      {
        source: "/coursera-assignment",
        destination:
          "https://github.com/TyMick/coursera-neural-networks-assignment/blob/master/complete_writeup.ipynb",
        permanent: true,
      },
      {
        source: "/covid-19-social-distancing",
        destination: "/blog/covid-19-social-distancing",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/tywmick",
        permanent: true,
      },
      {
        source: "/fcc1",
        destination:
          "https://www.freecodecamp.org/certification/tywmick/responsive-web-design",
        permanent: true,
      },
      {
        source: "/fcc2",
        destination:
          "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
        permanent: true,
      },
      {
        source: "/fcc3",
        destination:
          "https://www.freecodecamp.org/certification/tywmick/front-end-libraries",
        permanent: true,
      },
      {
        source: "/fcc5",
        destination:
          "https://www.freecodecamp.org/certification/tywmick/apis-and-microservices",
        permanent: true,
      },
      {
        source: "/fcc6",
        destination:
          "https://www.freecodecamp.org/certification/tywmick/information-security-and-quality-assurance",
        permanent: true,
      },
      {
        source: "/freecodecamp-contributions",
        destination:
          "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/TyMick",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/tywmick",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/tymick",
        permanent: true,
      },
      {
        source: "/loan-risk-neural-network",
        destination: "/blog/loan-risk-neural-network",
        permanent: true,
      },
      {
        source: "/nextjs",
        destination:
          "https://github.com/vercel/next.js/pulls?q=author%3Atywmick",
        permanent: true,
      },
      {
        source: "/nextjs-contributions",
        destination:
          "https://github.com/vercel/next.js/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged",
        permanent: true,
      },
      {
        source: "/python-apis",
        destination: "/portfolio#python-apis",
        permanent: true,
      },
      {
        source: "/starship-noise",
        destination:
          "https://mynoise.net/superGenerator.php?g1=spaceshipNoiseGenerator.php%3Fl%3D40404030400000000015%26a%3D1%26am%3D1%26c%3D3&g2=modernSpaceshipNoiseGenerator.php%3Fl%3D00000040000000000025%26a%3D1%26am%3D1%26c%3D3&g3=&g4=&g5=&yt=",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/tywmick",
        permanent: true,
      },
      {
        source: "/wishlist",
        destination:
          "https://www.amazon.com/hz/wishlist/ls/18NUWAXWOM98H?ref_=wl_share",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/tylerwestinmick",
        permanent: true,
      },
    ];
  },
});
