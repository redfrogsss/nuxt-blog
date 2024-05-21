[![wakatime](https://wakatime.com/badge/user/2cbd8003-b8b8-4565-92d7-ad9c23ff1846/project/ed273847-d383-4848-bc59-aa9c0f237566.svg)](https://wakatime.com/badge/user/2cbd8003-b8b8-4565-92d7-ad9c23ff1846/project/ed273847-d383-4848-bc59-aa9c0f237566)

# Nuxt Blog

Nuxt Blog is a blog web application built with Nuxt.js and Tailwind CSS. It uses the [Nuxt Content](https://content.nuxtjs.org/) module to load markdown files as blog posts.

## Features
- Markdown blog posts
- Dark mode
- RSS feed
- SEO
- Table of Content
- Next Article / Previous Article
- Sitemap
- etc.

<!-- ## Screenshots -->

## Setup

1. Clone this repository
2. Setup Environment Variables:

```
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX
```

3. Start the server:

```bash
# Recommended Node.js version: >=20.0.0

# Make sure to install the dependencies:
yarn install

# Start the development server on http://localhost:3000
yarn dev

# Build the application for production:
yarn build

# Locally preview production build:
yarn preview

```

## Blog Post Template

For a new blog post, create a new markdown file in the `content/posts` directory. The file name should be the slug of the post. For example, `hello-world.md` will have the slug `hello-world`.

Following by [Nuxt Content's doc](https://content.nuxtjs.org/api/composables/use-content-head), the markdown file should have the following frontmatter:

```markdown
---
title: 'My Page Title'
description: 'What a lovely page.'
image:
  src: '/assets/image.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
---

## Sub-title 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eu aliquam ultricies, massa nunc aliquet nisi, vitae luctus nunc nunc eu nisi. Donec euismod, nisl eu aliquam ultricies, massa nunc aliquet nisi, vitae luctus nunc nunc eu nisi.

## Sub-title 2
...
```

## Learn More
This project uses the following tech:
- [Nuxt.js](https://nuxtjs.org/)
- [Nuxt Content](https://content.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Heroicons](https://heroicons.com/)
- [Utterances](https://utteranc.es/)
- [Google Analytics](https://analytics.google.com/analytics/web/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
