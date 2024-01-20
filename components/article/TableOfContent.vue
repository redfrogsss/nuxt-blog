<template>
    <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12 hidden lg:block sticky top-4">
        <div class="prose">
            <h4 class="text-xl">
                <IconsTableOfContent className="inline h-[1.2em] mb-1 mr-1" />
                Table of Content
            </h4>
            <ul v-if="toc && toc.links">
                <li v-for="link in toc.links" :key="link.text">
                    <a :href="`#${link.id}`" class="hover:text-blue-500 no-underline font-normal transition-all">
                        {{ link.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const { toc } = useContent()
</script>