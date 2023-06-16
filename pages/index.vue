<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', where: [{ layout: 'articles' }], limit: 5, sort: [{ date: -1 }] }
</script>

<template>
  <div class="bg-base-200 min-h-screen">
    <main class="w-4/6 mx-auto py-8">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <!-- Show article list -->
          <ContentList path="/articles">
            <template #default="{ list }">
              <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12" v-for="article in list">
                <article class="prose">
                  <h2 class="mb-0">
                    <NuxtLink :to="`${article._path}`" class="no-underline hover:text-blue-500">{{ article.title }}
                    </NuxtLink>
                  </h2>
                  <small>
                    <IconsDateIcon className="h-[1rem] mb-1 mr-1 inline" />{{ new
                      Date(article.created_date).toDateString() }}
                  </small>
                  <p>
                    <small>{{ article.description }}</small>
                  </p>
                </article>
              </div>
            </template>
            <template #not-found>
              <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
                <p>No Blog Post Found.</p>
              </div>
            </template>
          </ContentList>

          <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
            <p>Test</p>
          </div>
        </div>
        <div>
          <AuthorPanel />
          <LatestPostPanel />
        </div>
      </div>
    </main>
</div></template>
