// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
],

  css: [
    '@/assets/css/main.css',
  ],

  components: {
       global: true,
       dirs: ['~/components']
        },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-10"
})