const { random } = require('superb')

module.exports = [
  {
    name: 'name',
    message: 'Project name',
    default: '{outFolder}'
  },
  {
    name: 'description',
    message: 'Project description',
    default: `My ${random()} Nuxt.js project`
  },
  {
    name: 'author',
    type: 'string',
    message: 'Author name',
    default: '{gitUser.name}',
    store: true
  },
  {
    name: 'pm',
    message: 'Choose the package manager',
    choices: [
      { name: 'Yarn', value: 'yarn' },
      { name: 'Npm', value: 'npm' }
    ],
    type: 'list',
    default: 'yarn'
  },
  {
    name: 'features',
    message: 'Choose Nuxt.js modules',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios', value: 'axios' },
      { name: 'Progressive Web App (PWA) Support', value: 'pwa' },
      { name: 'DotEnv', value: 'dotenv' }
      // { name: 'Prismic', value: 'prismic' }
    ],
    default: []
  },
  {
    name: 'linter',
    message: 'Choose linting tools',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'ESLint', value: 'eslint' },
      { name: 'Prettier', value: 'prettier' }
    ],
    default: []
  },
  {
    name: 'test',
    message: 'Choose test framework',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Jest', value: 'jest' },
      { name: 'AVA', value: 'ava' }
    ],
    default: 'none'
  },
  {
    name: 'mode',
    message: 'Choose rendering mode',
    type: 'list',
    choices: [
      { name: 'Universal (SSR / Static)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'devTools',
    message: 'Choose development tools',
    type: 'checkbox',
    choices: [
      { name: 'jsconfig.json (Recommended for VS Code)', value: 'jsconfig.json' }
    ],
    default: []
  }
]
