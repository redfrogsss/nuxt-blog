---
title: How to apply Google’s font with NuxtJS and Tailwind
created_date: 2023-08-14 00:16:00
Tags: NuxtJS, Tailwind, Google Fonts, Roboto, CSS
author: Jacky FAN
description: Learn how to apply Google's modern-looking Roboto font to your NuxtJS website with the help of TailwindCSS. This blog post covers the steps to load the font using the Nuxt Google Fonts module and apply it to your website with TailwindCSS.
head:
  meta:
    - name: 'keywords'
      content: 'NuxtJS, Tailwind, Google Fonts, Roboto, CSS'
    - name: 'author'
      content: 'Jacky FAN'
    - name: 'copyright'
      content: '© 2023 Jacky FAN'
---

## Intro

Recently, I want to change the font of my blog so it could looks sightly better. After searching the keywords “ `What is the best font for blog?` ”, I discovered *Roboto*, a modern-looking font from Google. I thought this is a good font for my blog so I start changing it.

Changing the font involve two main steps, loading the font from google and applying the font to the website.

## Loading Google’s Font with **Nuxt Google Fonts**

To load Google's *Roboto* font, I discovered that I can use the *[Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)* module. 

First, install the module by running this command. 

```bash
yarn add -D @nuxtjs/google-fonts
```

Then, add the module to the `nuxt.config.ts` file:

```tsx
modules: [
  "@nuxtjs/google-fonts"
],

googleFonts: {
  families: {
    Roboto: true
  }
}

```

In fact, the *Nuxt Google Fonts* module has [a variety of available options](https://google-fonts.nuxtjs.org/getting-started/options) for different needs, which is shown on their [docs](https://google-fonts.nuxtjs.org/getting-started/options).

Now, *Roboto* font is loaded and ready to use. I can apply it to the website via TailwindCSS.

## Applying Custom Font with TailwindCSS

To apply the *Roboto* font to the website via TailwindCSS, I need to add it to the `tailwind.config.ts` file.


`tailwind.config.ts`
```tsx
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    }
  },
}

```

In the config, I added a new custom font family option which apply the `Roboto` font and the default `sans` font family. It is because the blog website uses `sans` font family by default. 

Then, apply the font to the desired elements in the Vue files using the `font-roboto` class. In my case, I want it to be applied to be the whole website. Therefore, I added the class into the root `<div>` tag inside the `app.vue` file.


`app.vue`
```html
<template>
  <div class="bg-base-200 font-roboto">
    <NuxtPage />
  </div>
</template>
```

## Checking the Current Font on the Website

To check the current font on the website, I use an useful browser extension called [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm/related). It is a useful tool to chech which font is currently displaying.

![Screenshot](/How-to-apply-Google-font-with-NuxtJS/01.png)

## Conclusion

That's it! With these two simple steps, I have successfully applied the *Roboto* font to my blog website.

## Reference

- Nuxt Google Font Module - [https://google-fonts.nuxtjs.org/getting-started/setup](https://google-fonts.nuxtjs.org/getting-started/setup)
- Font Family - Tailwind CSS - [https://tailwindcss.com/docs/font-family](https://tailwindcss.com/docs/font-family)
- WhatFont - [https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm/related](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm/related)