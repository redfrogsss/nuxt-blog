// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    content: {
    highlight: {
      theme: "one-dark-pro"
      // theme: {
      //   // Default theme (same as single string)
      //   default: 'github-light',
      //   // Theme used if `html.dark`
      //   dark: 'github-dark',
      //   // Theme used if `html.sepia`
      //   sepia: 'monokai'
      // }
    }
  }
});
