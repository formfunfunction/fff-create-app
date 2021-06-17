module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    <%_ if (test === 'webdriverio') { _%>
    'plugin:wdio/recommended',
    <%_ } _%>
    'plugin:nuxt/recommended',
    <%_ if (prettier) { _%>
    'prettier'
    <%_ } _%>
  ],
  plugins: [
    <%_ if (test === 'webdriverio') { _%>
    'wdio'
    <%_ } _%>
  ],
  // add your custom rules here
  rules: {}
}
