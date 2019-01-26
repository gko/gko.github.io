---
title: Using raspberry as gitlab runner(with docker)
date: 2019-01-26
tags: ["gitlab", "raspberry", "docker"]
published: true
---
With an introduction of [USB boot](https://www.raspberrypi.org/documentation/hardware/raspberrypi/bootmodes/msd.md) option to Raspberry you can use it with an external SSD drive, so you don't need to switch broken SD cards from time to time and reconfigure the whole system.

And with SSD installed raspberry becomes an interesting option to use as an external [`gitlab runner`](https://docs.gitlab.com/runner/#install-gitlab-runner).

Now, as an executor you will probably choose `docker` since it allows you to run any software that you want in without having to install it on your Raspberry.

## But there is a catch

Since Raspberry doesn't have x64 CPU but rather ARMvX you will find that some of your gitlab jobs will fail with a following log:
```
standard_init_linux.go:190: exec user process caused "exec format error"
standard_init_linux.go:190: exec user process caused "exec format error"
ERROR: Job failed: exit code 1
```

That means that you have to go onto your raspberry and build your image locally like so:
```
docker build -t node .
```

provided that you have a `Dockerfile` prepared:
```
FROM node:8
```

And then you need to tell your docker executor to use local image instead of one from Dockerhub:
```
[[runners]]
  name = "raspberrypi"
  ...
  executor = "docker"
  [runners.docker]
    ...
    pull_policy = "if-not-present"
```
