# My website source code

This repo contains source code for [my website](https://konstantin.io)

## Run locally

execute following:

```bash
npm start
```

and open [localhost](http://localhost:8000)

## Use as gatsby starter

You can use it as a `gatsby` starter as following:
```bash
gatsby new my-website https://github.com/gko/gko.github.io
```

You then can replace articles in [`src/posts`](https://github.com/gko/gko.github.io/dev/src/posts) and [`pages/*.md`](https://github.com/gko/gko.github.io/dev/src/pages) with your own.

## How is it different from starter blog?

It's based on [starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) package, but I added following functions:
 - all pages/*.md files are also rendered into html content with their own urls
 - `tags` are supported
 - `tweet link` in every article
 - neat print preview(only prints the content and not website junk)
 - `published` meta field that indicates whether this post is a draft

... and some other stuff
