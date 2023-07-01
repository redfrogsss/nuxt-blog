<script lang="ts">
export default {
  setup: async function () {
    useHead({
      title: "Jacky FAN's Blog - A Personal Blog by Jacky FAN",
      meta: [
        {
          name: "description",
          content: "Welcome to Jacky FAN's Blog, where I share my passion for all the things I love, including programming, technology and so on.",
        },
        {
          name: "keywords",
          content: "Jacky FAN, Blog, Personal Blog, Jacky FAN's Blog",
        },
      ],
    })
    const { data, pending, error, refresh } = await useAsyncData("articles", async () => {
      const articles = await queryContent("articles").sort({ created_date: -1 }).find()
      return { articles: articles }
    });
    return { data }
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
      <Title>Jacky FAN's Blog - A Personal Blog by Jacky FAN</Title>
      <meta name="description" content="Welcome to Jacky FAN's Blog, where I share my passion for all the things I love, including programming, technology and so on." />
    </Head>
    <NavBar />
    <main class="w-11/12 2xl:w-4/6 mx-auto py-8 min-h-screen">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div class="col-span-3">
          <!-- Show article list -->
          <div>
            <!-- for SEO -->
            <h1 class="hidden">Jacky FAN's Article</h1>

            <div v-for="(article, index) in data?.articles">
              <div v-if="index < skipArticles + 5 && index >= skipArticles">
                <div class="bg-base-100 rounded-lg shadow-md my-4 px-8 py-12">
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
              </div>
            </div>
          </div>
          <div class="my-4 px-8 pt-12 lg:pb-4 text-center">
            <div class="join">
              <input class="join-item btn btn-square" type="radio" name="options" :aria-label="(n).toString()"
                @click="() => { setPage(n) }" :checked="n === page"
                v-for="n in getPageTotal(data?.articles.length ?? 0)" />
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
