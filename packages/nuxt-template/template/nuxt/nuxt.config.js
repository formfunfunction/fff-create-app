export default {
  mode: '<%= mode %>',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },

      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-navbutton-color', content: '#000' },
      { name: 'msapplication-TileColor', content: '#000' },
      { name: 'theme-color', content: '#000' },

      { property: 'og:title', content: process.env.npm_package_name || '' },
      {
        property: 'og:image',
        content: 'https://formfunfunction.com/og_image_01.png'
      },
      { property: 'og:image:width', content: '1200px' },
      { property: 'og:image:height', content: '630px' },
      {
        property: 'og:image:alt',
        content: process.env.npm_package_description || ''
      },

      { name: 'twitter:title', content: process.env.npm_package_name || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://formfunfunction.com/og_image_01.png'
      },
      { name: 'twitter:site', content: '@formfunfunction' },
      { name: 'twitter:creator', content: '@formfunfunction' },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    <%_ if (axios) { _%>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    <%_ } _%>
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
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
