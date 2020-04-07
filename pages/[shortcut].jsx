import React from "react";
import Redirect from "../components/client-side-redirect";

// Array of shortcuts
const links = [
  {
    shortcut: "facebook",
    forward: "https://www.facebook.com/tylerwestinmick",
  },
  {
    shortcut: "github",
    forward: "https://github.com/tywmick",
  },
  {
    shortcut: "twitter",
    forward: "https://twitter.com/tywmick",
  },
  {
    shortcut: "instagram",
    forward: "https://instagram.com/tywmick",
  },
  {
    shortcut: "youtube",
    forward: "https://www.youtube.com/tylerwestinmick",
  },
  {
    shortcut: "wishlist",
    forward:
      "https://www.amazon.com/hz/wishlist/ls/18NUWAXWOM98H?ref_=wl_share",
  },
  {
    shortcut: "beverages",
    forward: "https://workflowy.com/s/beverages-id-enjoy-a/sDeB5YcOcO6syrRE",
  },
  {
    shortcut: "mileage",
    forward:
      "https://docs.google.com/forms/d/e/1FAIpQLSdsheP_Mh8glRYDrdYmDdTEbddXuD1T9IkZke-keMYZV1P_DQ/viewform?usp=sf_link",
  },
  {
    shortcut: "miles",
    forward:
      "https://docs.google.com/forms/d/e/1FAIpQLSdsheP_Mh8glRYDrdYmDdTEbddXuD1T9IkZke-keMYZV1P_DQ/viewform?usp=sf_link",
  },
  {
    shortcut: "fcc1",
    forward:
      "https://www.freecodecamp.org/certification/tywmick/responsive-web-design",
  },
  {
    shortcut: "fcc2",
    forward:
      "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
  },
  {
    shortcut: "fcc3",
    forward:
      "https://www.freecodecamp.org/certification/tywmick/front-end-libraries",
  },
  {
    shortcut: "fcc5",
    forward:
      "https://www.freecodecamp.org/certification/tywmick/apis-and-microservices",
  },
  {
    shortcut: "fcc6",
    forward:
      "https://www.freecodecamp.org/certification/tywmick/information-security-and-quality-assurance",
  },
];

function Shortcut({ forward }) {
  return <Redirect href={forward} />;
}

export async function getStaticPaths() {
  const paths = links.map((link) => ({
    params: { shortcut: link.shortcut },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const forward = links.find((link) => link.shortcut === params.shortcut)
    .forward;
  return { props: { forward } };
}

export default Shortcut;
