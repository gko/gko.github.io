---
title: Refresh commit date
date: 2019-01-01
---

Imagine you made some commits and later want to update the date of the commits.

Now if you were to do it on the latest commit, you can just do:
```bash
GIT_COMMITTER_DATE="$(date)" git commit --amend --no-edit --date "$(date)"
```

and that would update the date of the last commit, so you can then `push` or `push force` it.

## Multiple commits

To perform this action in bulk mode you can just run:

```bash
git rebase HEAD~{number of commits} --ignore-date
```

Now you can just create a shortcut in your `.gitconfig` like so:
```bash
[alias]
  refresh = "!f() { git rebase HEAD~$1 --ignore-date; }; f"
```
