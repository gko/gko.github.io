---
title: Refresh commit date
date: 2019-01-01
---

Imagine that you made some commits for which you would like to update the time or a date.(so that you would keep only the chronological order)

Now if you were to do it on the latest commit, you can just run:
```bash
GIT_COMMITTER_DATE="$(date)" git commit --amend --no-edit --date "$(date)"
```

and that would update the date of the last commit, so you can then `push` or `push force` it.

## Multiple commits

To perform this action in bulk mode you can just run:

```bash
git rebase HEAD~{number of commits} --ignore-date
```

You can also create a shortcut in your `~/.gitconfig` like so:
```bash
[alias]
  refresh = "!f() { git rebase HEAD~$1 --ignore-date; }; f"
```

where the parameter would be number of commits starting from `HEAD` to update, i.e.:
```bash
git refresh 6
```
