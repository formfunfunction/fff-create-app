export default {
  <%_ if (mode === 'spa') { _%>
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  <%_ } _%><%_ if (target === 'static') { _%>
  // Target: https://go.nuxtjs.dev/config-target
  target: '<%= target %>',

  <%_ } _%>
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '<%= name %>',
    <%_ if (!pwa) { _%>
    htmlAttrs: {
      lang: 'en'
    },
    <%_ } _%>
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

  // Customize the progress-bar color: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
  loading: { color: '#333' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/client-init', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    <%_ if (axios) { _%>
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    <%_ } _%>
    <%_ if (pwa) { _%>
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  <%_ } _%>
  <%_ if (pwa) { _%>

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      appleStatusBarStyle: 'black',
      theme_color: '#000',
      name: '<%= name %>',
      ogHost: 'https://formfunfunction.com',
      ogImage: {
        path: '/og_image_01.png',
        width: '1200px',
        height: '630px'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@formfunfunction',
      twitterCreator: '@formfunfunction'
    }
  },
  <%_ } _%>

  // Use src/ directory to keep consistent file structure across frameworks
  srcDir: 'src/',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
