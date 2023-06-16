---
title: Hello World
author: Jacky FAN
created_date: 2023-06-15

---

This is a `test` post.


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Testing Markdown Code

```Javascript
<template>
    <div class="bg-base-200 min-h-screen">
        <NavBar />
        <main class="w-4/6 mx-auto my-8">
            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-3">
                    <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12 w-full">
                        <ContentDoc v-slot="{ doc }">
                            <article class="prose prose-pre:mockup-code pl-4 w-full">
                                <h1>{{ doc.title }}</h1>
                                <hr class="m-0 mb-2" />
                                <small>
                                    <IconsDateIcon className="w-auto h-[1rem] mb-1 mr-1 inline" />{{ new Date(doc.created_date).toDateString() }} | 
                                    <IconsPersonIcon className="w-auto h-[1rem] mb-1 mr-1 inline" />{{ doc.author }}
                                </small>
                                <ContentRenderer :value="doc" />
                            </article>
                        </ContentDoc>
                    </div>
                </div>
                <div>
                    <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
                        Side Panel
                    </div>
                    <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
                        Side Panel
                    </div>
                </div>
            </div>
        </main>
    </div></template>
```