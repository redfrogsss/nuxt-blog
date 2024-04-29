---
title: Force Use npm, yarn or pnpm
created_date: 2024-04-30 00:30:00
Tags: Package Manager
author: Jacky FAN
description: Nowadays, there are many package manager on the Internet, such as `npm`, `pnpm` and `yarn`. Most of the time, we do not want to accidentally run other package managers when the project is already setup using a package manager for avoiding potential issues in the future.
head:
  meta:
    - name: 'keywords'
      content: 'package manager, npm, yarn, pnpm, package-lock.json'
    - name: 'author'
      content: 'Jacky FAN'
    - name: 'copyright'
      content: '© 2024 Jacky FAN'
---

![Force Use npm, yarn or pnpm](/assets/img/Force-use-npm-yarn-or-pnpm/banner.png)

Nowadays, there are many package manager on the Internet, such as `npm`, `pnpm` and `yarn`. Most of the time, we do not want to accidentally run other package managers when the project is already setup using a package manager for avoiding potential issues in the future.

![Yarn warning about mixing package managers](/assets/img/Force-use-npm-yarn-or-pnpm/01.png)

Therefore, this article shows how to force a project to use specific package manager.

## The simple solution that does not work

The first solution shows in the documents of pnpm, which applied `only-allow` npm package into `preinstall` script into `package.json`.

```json
"preinstall": "npx only-allow pnpm" // or yarn / npm
```

And it doesn’t work. 

![Untitled](/assets/img/Force-use-npm-yarn-or-pnpm/02.png)

The `only-allow` package did stopped `npm i` from running and shown the warning messages. However, it stills generate `package-lock.json` file that we do not want. 

It is because the `preinstall` script runs after dependencies installation, which generates the `package-lock.json` while installing dependencies.

## Better Solution for Force Use npm / yarn / pnpm

Here is a better solution for 

```bash
echo "engine-strict = true" > .npmrc
```

package.json

```bash
  "engines": {
    "npm": "please-use-yarn", # or "please-use-npm" or "please-use-pnpm"
    "pnpm": "please-use-yarn",
    "yarn": ">= 1.19.1" # or remove the whole line
  }
```

Here are the results:

![Untitled](/assets/img/Force-use-npm-yarn-or-pnpm/03.png)

![Untitled](/assets/img/Force-use-npm-yarn-or-pnpm/04.png)

![Untitled](/assets/img/Force-use-npm-yarn-or-pnpm/05.png)

There is no `package-lock.json` after running `npm i`. Looks great~

This works by checking package manager’s versions is matching the specific version in the package.json before running any installation. Since the version of package manager will never match `please-use-xxx`, it will fail to start installing.

The only downside of this solution is that any package manager that are not specified in the package.json will be able to install package and generate lock file.


## Reference
- [https://www.freecodecamp.org/news/how-to-force-use-yarn-or-npm/](https://www.freecodecamp.org/news/how-to-force-use-yarn-or-npm/)
- [https://github.com/pnpm/only-allow/issues/27](https://github.com/pnpm/only-allow/issues/27)