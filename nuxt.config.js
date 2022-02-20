export default {
  // https://nuxtjs.org/docs/configuration-glossary/configuration-server/
  // https://www.nuxtjs.cn/api/configuration-server
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: false // default: false 启用server.timing选项会添加一个中间件来测量服务器端渲染过程中经过的时间，并将其作为'Server-Timing'添加到标头中
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost'
  },

  // https://nuxtjs.org/docs/features/loading/
  // 當 nuxt 應用在切換頁面時，會有預設的加載進度條，可以自己設定顏色或是關閉顯示。
  // loading: false,
  loading: '~/components/LoadingBar.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'yellow'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  // 定義預設 meta 標籤，此處定義的 meta 以全站共用為主，當然也可以於各個頁面(pages) 覆寫掉共用的 meta。
  head: {
    title: 'nuxt-express-middleware',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // 用於處理在 vue instance 被實例化之前，所需要運行的 js 或添加的插件。
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // 可方便快速添加 nuxt 的套件，並客製化設定，也可以自己寫。
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/
  serverMiddleware: [
    // { path: 'erik', handler: '~/api/index.js' }
    '~/api/index'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
