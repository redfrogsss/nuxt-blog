<script setup lang="ts">
const { page } = useContent()

useContentHead(page)
</script>

<template>
    <div class="bg-base-300 min-h-screen h-full">
        <NavBar />
        <main class="max-w-[1280px] px-4 md:px-6 lg:px-8 mx-auto py-8 min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="col-span-3">
                    <ArticleDocument />
                    <ArticleNavigator />
                    <ArticleComments />
                </div>
                <div>
                    <AuthorPanel />
                    <LatestPostPanel />
                    <ArticleTableOfContent />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>