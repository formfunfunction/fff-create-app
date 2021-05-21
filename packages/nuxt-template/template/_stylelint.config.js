module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    <%_ if (prettier) { _%>
    'stylelint-config-prettier'
    <%_ } _%>
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
  ignoreFiles: ["**/_reset.scss"]
}
