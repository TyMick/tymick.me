# About [TyMick.me](https://tymick.me)

Welcome to my personal porfolio site! [TyMick.me](https://tymick.me) is a static website built with [Next.js](https://nextjs.org/) and hosted on [GitHub Pages](https://pages.github.com/). You've already found the [`source`](https://github.com/tywmick/tywmick.github.io) branch, and if you'd like to see the static build, that's called [`master`](https://github.com/tywmick/tywmick.github.io/tree/master).

Static sites may not be where Next.js shines, but I came across the framework when starting to build a server-rendered app that's been stuck in my head (the beginning stages of which you can find in my [Next.js local authentication with MongoDB](https://nextjs-local-authentication.tymick.me/) project), and now that I've been working in it so long it was the natural choice for building this portfolio site as quickly and efficiently as possible. I'm thinking I may port it to [Gatsby](https://www.gatsbyjs.org/) once I start [writing](https://tymick.me/essays) more, but no need to learn a new framework just yet.

Design I accomplished with [Bootstrap](https://getbootstrap.com/) (via [React Bootstrap](https://react-bootstrap.netlify.com/)) and a little custom [Sass](https://sass-lang.com/). Just wanted something minimal.

If you're curious how I got separate source and build branches in this single `tywmick.github.io` repository, it went a little something like this:

- Renamed my default branch `source`
- [Created a clean orphan branch](https://stackoverflow.com/a/34100189/7133888) named `master`
- Pushed `master` to the remote
- Installed [gh-pages](https://github.com/tschaub/gh-pages)
- Configured my npm scripts like so:

  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "predeploy": "npm run build && touch out/.nojekyll",
    "deploy": "gh-pages -b master -d out -m Build -t"
  }
  ```

I would've named the build branch `build`, but alas, GitHub requires that user sites be built from the `master` branch.
