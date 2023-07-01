// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    content: {
        documentDriven: true,
        highlight: {
            theme: "one-dark-pro",
        },
    },
    appConfig: {
        public: {
            NUXT_PUBLIC_GTAG_ID: process.env.NUXT_PUBLIC_GTAG_ID,
        },
    },
});
