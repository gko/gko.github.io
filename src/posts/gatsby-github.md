---
title: Running «Gatsby.js» blog with github pages
date: 2019-01-02
tags: ["gatsby", "git", "github", "blog"]
published: true
---

There are many tutorials on how to run a gatsby website with github pages, but most if not all of them are focused on how to generate a website for your repository.

Github has a feature where it provides you with ability to host your static website, i.e. «username.github.io» and link a domain name to it.

To do that you can create a repository `username.github.io`. You can find more info on that [here](https://pages.github.com)

Now the problem with gatsby and github pages is that the generated resources are not in the root folder of your repository and if you use `gh-pages` package it will rewrite all your source files when you publish.

To fix that, you need to create a `dev` branch which will contain all your sources and add `deploy` script to your `package.json` that will contain following:
```json
{
  …
  scripts: {
    deploy: 'gatsby build && gh-pages -d public -b master'
  }
  …
}
```

So when we run `npm run deploy` on dev branch gatsby builds sources from `dev` branch and gh-pages publishes the result to the root folder on `master` branch.

## Custom domain name

If you have already setup a custom domain for github pages, you would notice that there has to be a `CNAME` file in the root folder of your repository that contains custom domain name.

If we run `npm run deploy` this file would be deleted by generated website.

To keep this file you will need to store it in `static` folder. You can find more info about static folder [here](https://www.gatsbyjs.org/docs/static-folder/).
