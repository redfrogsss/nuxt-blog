import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: process.env.NUXT_PUBLIC_GTAG_ID || useAppConfig().public.NUXT_PUBLIC_GTAG_ID
    }
  })
  trackRouter(useRouter())
})