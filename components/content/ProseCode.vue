<template>
    <div class="mockup-code prose-mockup-code shadow">
        <slot />
    </div>
    <p v-if="filename" class="text-center">
        <code>{{ filename }}</code>
    </p>
</template>
  
<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    }
})
</script>
  
<style>
.prose-mockup-code pre {
    padding-block: 0;
    margin-block: 12px 4px;
}

.prose-mockup-code pre:before {
    content: unset;
}

.prose-mockup-code pre code span.line {
    padding-left: 8px;
}

.prose-mockup-code pre code span.line:before {
    content: attr(line);
    pointer-event: none;
    margin-right: 20px;
    opacity: .5;
}
</style>