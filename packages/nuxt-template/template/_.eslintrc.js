module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    <%_ if (test === 'webdriverio') { _%>
    'plugin:wdio/recommended',
    <%_ } _%>
    'plugin:nuxt/recommended'
  ],
  plugins: [
    <%_ if (test === 'webdriverio') { _%>
    'wdio'
    <%_ } _%>
  ],
  // add your custom rules here
  rules: {}
}
