---
title: Aliases git way
date: 2019-04-01
published: true
description: git aliases done right =)
tags: [ git, alias, gitconfig, shell ]
cover_image: https://thepracticaldev.s3.amazonaws.com/i/hk8d7hycjb9epklumqf1.png
---

Often I see developers tweet their git aliases and most of the time they are using standard alias functionality of their shell. Kind of like that:
`alias gs = git status`

`git` actually provides you with the ability to make an alias for some git command or even create your own command. You can do it in the `[alias]` section of your `.gitconfig` file(which can be found in your user’s home folder).

## Aliases

So for instance if we take the previous example, you can write something like:
```
[alias]
  s = status
```

and you will be able to use it as following:
`git s`

Now you might say that it is much longer then «gs». But you can also make an alias for git itself in your shell:

```shell
  alias g = git
```

and so now you can simply call your alias by typing `g s`.

## Custom commands

Apart from aliases you can actually create some really cool custom commands. For instance, we can add an alias to see last 10 branches that you’ve checked out:

```
[alias]
  recent = for-each-ref --count=10 --sort=-committerdate refs/heads/ --format="%(refname:short)"
```

Which I shamelessly picked from [csswizardry’s article](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/). When you run it(`g recent`) you’ll see a list of your last ten branches(or less if you haven’t checked out ten).

## Using shell within git alias

You can also do «shell evaluate» within git alias:

```
[alias]
  compare = "!f() { git log --oneline $1..$2; }; f"
```

Here we define an alias, that contains an anonymous function that is invoked straight away. We can also pass parameters to this function. In this example we pass two revisions or branches so that we get a list of commits that differs them.

You can use this alias as follows:
`g compare branch1 branch2`

## More stuff

You can see the examples above and some other cool stuff in the [gitconfig file](https://github.com/gko/dotfiles/blob/master/.gitconfig) from my [dotfiles repo](https://github.com/gko/dotfiles).
