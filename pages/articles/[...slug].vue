<template>
    <div class="bg-base-200 min-h-screen h-full">
        <NavBar />
        <main class="w-11/12 2xl:w-4/6 mx-auto py-8 min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="col-span-3">
                    <ArticleDocument />
                    <ArticleNavigator />
                    <ArticleComments />
                </div>
                <div>
                    <ArticleTableOfContent />
                    <AuthorPanel />
                    <LatestPostPanel />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>