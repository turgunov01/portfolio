// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`~/server/assets/style.css`],
  modules: ["nuxt-swiper", 'vue3-carousel-nuxt'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    modules: ['navigation', 'pagination'],
  },
  carousel: {
    prefix: "Carousel"
  },
  ssr: false
})