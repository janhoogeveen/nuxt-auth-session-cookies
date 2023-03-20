// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true
  }
});
