<script lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export default {
  setup: async function () {
    const host = "http://localhost"
    let response = await fetch(`${host}/api/_content/query`, { method: "GET" })
    let responseJSON = await response.json();
    let articleLength = ref(responseJSON.length);
    return { articleLength }
  },
  data() {
    return {
      skipArticles: 0,
      page: 1,
    }
  },
  methods: {
    setPage: function (page: number) {
      this.page = page;
      this.skipArticles = 5 * (page - 1);
    },
    getArticleQuery: function () {
      const query: QueryBuilderParams = { path: '/articles', limit: 5, skip: this.skipArticles, sort: [{ date: -1 }] }
      return query;
    },
    getPageTotal: function (articleLength: number): number {
      let total = Math.trunc(articleLength / 5);
      if ((articleLength % 5) > 0) total++;
      return total;
    }
  }
}
</script>

<template>
  <div class="bg-base-200 min-h-screen">

    <Head>
      <Title>Jacky FAN's Blog</Title>
    </Head>
    <NavBar />
    <main class="w-11/12 2xl:w-4/6 mx-auto py-8 min-h-screen">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div class="col-span-3">
          <!-- Show article list -->
          <ContentList path="/articles" :query="getArticleQuery()">
            <template #default="{ list }">
              <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12" v-for="article in list">
                <article class="prose prose-slate w-full inline">
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
          <div class="my-4 px-8 pt-12 lg:pb-4 text-center">
            <div class="join">
              <input class="join-item btn btn-square" type="radio" name="options" :aria-label="(n).toString()"
                @click="() => { setPage(n) }" :checked="n === page" v-for="n in getPageTotal(articleLength)" />
            </div>
          </div>
        </div>
        <div>
          <AuthorPanel />
          <LatestPostPanel />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
