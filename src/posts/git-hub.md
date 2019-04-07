---
title: Making your life easier with «Hub» from GitHub
published: true
date: 2019-04-07
description: hub aliases for better GitHub experience
tags: [github, hub, git, alias]
cover_image: https://thepracticaldev.s3.amazonaws.com/i/hx7ercygzce8mop537pt.png
---

I find that the most annoying part of working with GitHub is the necessity to switch back and forth between terminal and web interface to either copy a repo name, to see pull requests/issues or to fork stuff. Wouldn’t it be much easier if I could just write something like `git repos` and get the list, so that I can just clone it right away.

## Enter «Hub»

If you’ve been working with github for some time you probably know or use the [hub](https://github.com/github/hub) project from GitHub. Well, [recently](https://github.com/github/hub/releases/tag/v2.8.3) they added something that might change the way you work with GitHub: [hub api command](https://hub.github.com/hub-api.1.html) that allows you to use any of GitHub API and make [graphql queries](https://developer.github.com/v4/).

## Let's make some aliases

You can find a bit more information on git aliases in my [previous
post](/git-alias/).

Generally, after you've installed `hub` you will alias it to git, so that it wraps all basic functions while adding its own(run `hub alias` for settings in your shell). Now, let's take a look at problems above.

### Git repos

First we want to get list of user's github repositories. I found an elegant solution to list a random user repos in one of [hubs issues](https://github.com/github/hub/issues/1419#issuecomment-473861104). All we need is to add a function that will tell us a logged in user. To do that we need to add following alias into `~/.gitconfig`:

```TOML
[alias]
  user = "!f() { hub api --flat user | grep .login | awk '/.login/ {print $2}'; }; f"
```

now we need to break down the script we found into several aliases:

```TOML
[alias]
  # this function allows you to go through hub low level api with or without multiple pages
  paginate = "!paginate() { local output cursor; output=\"$(\"$@\")\"; cursor=\"$(awk '/\\.hasNextPage/ { has_next=$2 } /\\.endCursor/ { if (has_next==\"true\") print $2 }' <<<\"$output\")\"; printf \"%s\\n\" \"$output\"; [ -z \"$cursor\" ] || paginate \"$@\" -f after=\"$cursor\"; }; paginate "

  repos = "!repos() { local user=\"${1?}\";shift 1; git paginate hub api -t graphql -f user=\"$user\" \"$@\" \
  -f query='query($user: String!, $per_page: Int = 100, $after: String) { user(login: $user) { \
  repositories(first: $per_page, after: $after) { nodes { nameWithOwner }, pageInfo { hasNextPage, endCursor } } } }';}; \
  repos \"$(git user)\" | awk '/\\.nameWithOwner\\t/ { print $2 }';"
```

as a result you can just type `git repos` and it will list all your GitHub repos:

```
gko/dotfiles
gko/vimio
gko/concat
...
```

### Git comment

Hub allows you to view, create or close any repo's issue from terminal using [hub issue](https://hub.github.com/hub-issue.1.html) command. But there is no default way to post a comment from the terminal. But using `hub api` we can do just that:

```TOML
[alias]
  comment = "!f() { hub api \"repos/{owner}/{repo}/issues/$1/comments\" --raw-field \"body=$2\"; }; f"
```

now we can just type `git comment <ISSUE NUMBER> "Some comment"` and it will be posted for us.

### Hub browse

Another amazing hub feature is [`hub browse`](https://hub.github.com/hub-browse.1.html) that allows you to view a project main page, or any subpage(i.e. «/issues») as following:

```TOML
[alias]
  issues = browse -- issues
  wiki = browse -- wiki
```

## More stuff

You can see the examples above and some other cool stuff in the [gitconfig file](https://github.com/gko/dotfiles/blob/master/.gitconfig) from my [dotfiles repo](https://github.com/gko/dotfiles).
