import { EnvironmentPlugin } from "webpack";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jlosch',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website from Johannes Losch. With projects, about and contact field.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'INDEX,FOLLOW'},
      { name: 'content-Language', content: 'en'},
      { name: 'author', content: 'Johannes Losch'},
      { name: 'publisher', content: 'Johannes Losch'},
      { name: 'copyright', content: 'Johannes Losch'},
      { name: 'Reply-to', content: 'hi@jlosch.de'},
      { name: 'keywords', content: 'Johannes Losch, web developer, developer, Johannes, Losch, projects'}
    ],
    script: [
      {
        src:
          'https://analytics.jlosch.de/js/plausible.js',
          defer: true,
          'data-domain': "jlosch.de"
      },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL === undefined ? 'https://jlosch.de' : process.env.BASE_URL
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/robots'
  ],
  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
