<template>
    <div class="bg-base-200 min-h-screen h-full">
        <main class="w-4/6 mx-auto py-8">
            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-3">
                    <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
                        <ContentDoc v-slot="{ doc }">
                            <article class="prose prose-slate prose-pre:mockup-code prose-pre:pl-4 w-full inline">
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
                    <AuthorPanel />
              <LatestPostPanel />
                </div>
            </div>
        </main>
    </div></template>