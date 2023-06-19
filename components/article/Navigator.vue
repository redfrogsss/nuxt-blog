<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
    <div class="flex">
        <NuxtLink v-if="prev" :to="prev._path" class="flex-none bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
            <div class="flex h-full w-fit">
                <IconsArrowLeft className="inline h-[1.2rem] my-auto mr-8" />
                <div class="prose">
                    <small>Previous Article</small>
                    <h6 class="font-bold"> {{ prev.title }} </h6>
                </div>
            </div>
        </NuxtLink>
        <div class="grow" />
        <NuxtLink v-if="next" :to="next._path" class="flex-none bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
            <div class="flex h-full w-fit">
                <div class="prose">
                    <small>Next Article</small>
                    <h6 class="font-bold"> {{ next.title }} </h6>
                </div>
                <IconsArrowRight className="inline h-[1.2rem] my-auto ml-8" />
            </div>
        </NuxtLink>
    </div>
</template>
