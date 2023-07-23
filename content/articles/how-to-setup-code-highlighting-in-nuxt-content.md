---
created_date: 2023-06-27 12:23
author: Jacky FAN
Tags: Nuxt, Nuxt Content
description: This post is a tutorial on how to enable and customize code highlighting in Nuxt Content, a file-based Content Management System for Nuxt.js applications. The post covers creating a project with Nuxt Content, creating content files with code blocks, configuring Nuxt Config to enable code highlighting, and creating a component to render content. The post also provides examples of customized code highlighting and links to relevant resources.
---

## Intro

In this blog post, I will show you how to enable and customize code highlighting in Nuxt Content, a file-based Content Management System for Nuxt.js applications. The post covers creating a project with Nuxt Content, creating content files with code blocks, configuring Nuxt Config to enable code highlighting, and creating a component to render content. The post also provides examples of customized code highlighting and links to relevant resources.

## What is Nuxt Content?

Nuxt Content is a file-based Content Management System (CMS) for the Nuxt.js application. Nuxt Content reads data files (`.md`, `.yml`, `.csv`, `json`) inside the `content/` folder and displays them as custom Vue components on the website.

At the time of writing, I am using Nuxt v3.5.2 and Nuxt Content v2.6.0.

## What is Code Highlighting?

Code highlighting is a feature in Nuxt Content that changes the color and style of code blocks for easy reading. Nuxt Content supports this feature by using Shiki, an open-source Syntax Highlighter. Shiki supports most programming languages and lots of VSCode themes.

By default, code highlighting is disabled in the Nuxt Content. However, it is easy to enable it and customize it.

## How to Set Up?

### Step 1: Create a project with Nuxt and Nuxt Content

Following by the [Nuxt Content Document](https://content.nuxtjs.org/get-started), it is easy to create a project with a few commands.

```bash
npx nuxi@latest init content-app -t content
cd content-app
yarn install
yarn dev
```

### Step 2: Create content with code blocks

Create a markdown file in the `content/` folder and write your article. To create a code block, you can follow the following syntax.

`````markdown
---
title: Test Code Block
date: 2023-06-23 01:20:00
---

## Code Block Example

Here is a code block example:

```js
console.log("Hello World")
```‎

`````

Note that the name of the language must be lowercase and recognized by Shiki. You may check the complete list of supported languages [here](https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages).

### Step 3: Config Nuxt Config

Locate the `nuxt.config` file and config the code highlighting feature by adding the `content` section to the config file.

```tsx
// from https://content.nuxtjs.org/api/configuration#highlight

export default defineNuxtConfig({
    content: {
        highlight: {
            theme: {
                default: "one-dark-pro",
                dark: "github-dark",
            },
        },
    },
});
```

Note that you can change the theme name to other VSCode themes such as `one-dark-pro` and `github-dark`. You may check the complete list of support themes [here](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes).

### Step 4: Create a component to render your content

Create a component under the `components/` folder by following the example from the official documentation. Then, use it on your website.

Nuxt Content uses `<ContentDoc />` to fetch the document and return a variable named `doc`. Then, it uses `<ContentRenderer />` to render the content.

```tsx
// from https://content.nuxtjs.org/api/components/content-doc

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
```

Note that you could also customize the CSS style of the content with `class` and `styles` props, just like building a standard Vue component.

I hope this guide has been helpful in setting up code highlighting in Nuxt Content (without searching for multiple documentations like what I did first time). If you have any further questions or feedback, feel free to leave a comment. Happy coding!

## Reference

[https://content.nuxtjs.org/guide/writing/markdown/#code-highlighting](https://content.nuxtjs.org/guide/writing/markdown/#code-highlighting)

[https://content.nuxtjs.org/api/configuration#highlight](https://content.nuxtjs.org/api/configuration#highlight)

[https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes)

[https://github.com/shikijs/shiki](https://github.com/shikijs/shiki)
````
