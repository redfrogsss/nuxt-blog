<template>
    <div class="bg-base-100 rounded-lg shadow-md my-4 px-4 md:px-8 py-12">
        <ContentDoc v-slot="{ doc }">
            <div className="breadcrumbs mb-2">
                <ul class="text-sm">
                    <li class="prose text-sm">
                        <NuxtLink to="/" class="no-underline hover:text-blue-500">Home</NuxtLink>
                    </li>
                    <li class="prose text-sm">{{ doc.title }}</li>
                </ul>
            </div>
            <article class="prose prose-slate w-full inline">
                <h1>{{ doc.title }}</h1>
                <hr class="m-0 mb-2" />
                <small>
                    <IconsDateIcon className="w-auto h-[1.2em] mb-1 mr-1 inline" />{{ new
                        Date(doc.created_date).toDateString() }}
                    &nbsp;|&nbsp;
                    <IconsPersonIcon className="w-auto h-[1.2em] mb-1 mr-1 inline" />{{ doc.author
                    }}
                    &nbsp;|&nbsp;
                    <IconsClock className="w-auto h-[1.2em] mb-1 mr-1 inline" />{{ Math.ceil(countWords(doc.body) / 250) }}
                    min read
                </small>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </div>
</template>

<script setup>
function countWords(obj) {
    let totalWords = 0;

    // Helper function to count words in a text string
    function countWordsInText(text) {
        const words = text.split(/\s+/);
        return words.length;
    }

    // Recursive function to traverse the JSON structure
    function traverse(node) {
        if (node.type === "text" && node.value) {
            totalWords += countWordsInText(node.value);
        } else if (node.children && node.children.length > 0) {
            node.children.forEach(traverse);
        }
    }

    traverse(obj);

    return totalWords;
}
</script>
