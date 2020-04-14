export default {
  mode: '<%= mode %>',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_name },
      { hid: 'og:image', property: 'og:image', content: 'https://formfunfunction.com/og_image_01.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#333' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/client-init', ssr: false }
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    <%_ if (eslint) { _%>
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    <%_ } _%>
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    <%_ if (axios) { _%>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    <%_ } _%>
    <%_ if (pwa) { _%>
    '@nuxtjs/pwa',
    <%_ } _%>
    <%_ if (dotenv) { _%>
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  <%_ } _%>
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
