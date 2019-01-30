---
title: How to avoid blank font
date: 2019-01-30
published: true
tags: ['css', 'fonts', 'font-display']
---
Loading custom fonts is a bit tricky. There is already a great article on how to do it using `@font-face`. There is a cool article «[Bulletproof @font-face](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)».

Unfortunately, the default behavior in many browsers when you load a custom font is to hide the text until custom font is loaded, which means that user doesn’t see the content(which is probably why he came to your website in the first place).

## Enter `font-display` property

`Font-display` is [supported](https://caniuse.com/#feat=css-font-rendering-controls) across all modern browsers(except edge) and allows you to choose between four following strategies for font loading behavior:
 - block
 - swap
 - fallback
 - optional

`block` behavior means that user sees blank font-face until custom font is loaded and is subsequently replaced by it.

`swap` behavior shows text content right away and loads in the background the custom font.

`fallback` is basically the same as block. The difference is that it gives less time to load font.

`optional` tries to swap font only if it is installed already.

## Which one is right for me

For this website I decided to go with more popular option, `font-face: swap`, but the best always depends on context in which the webpage is loaded.
