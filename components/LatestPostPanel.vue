<template>
    <div class="bg-base-100 rounded-2xl shadow-md my-4 px-8 py-8 hidden lg:block">
        <div class="prose">
            <h4 class="text-xl">
                <IconsNewsPaperIcon className="h-[1.2em] mb-1 inline" /> Latest Articles
            </h4>
            <div class="divide-y">
                <ContentList :query="query">
                    <template #default="{ list }">
                        <div v-for="article in list" :key="article._path" class="py-2">
                            <NuxtLink :to="article._path" class="mb-0 no-underline hover:text-blue-500 transition-all">{{
                                article.title
                            }}</NuxtLink>
                            <br />
                            {{ new Date(article.created_date).toDateString() }}
                        </div>
                    </template>
                    <template #not-found>
                        <div>No Article Recently.</div>
                    </template>
                </ContentList>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', limit: 3, sort: [{ created_date: -1 }] }
</script>