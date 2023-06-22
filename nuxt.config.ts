// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-gtag"],
    content: {
        documentDriven: true,
        highlight: {
            theme: "one-dark-pro",
        },
    },
    gtag: {
        id: process.env.NUXT_PUBLIC_GTAG_ID
    }
});
