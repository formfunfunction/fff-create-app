module.exports = [
  {
    name: 'name',
    message: 'Project name:',
    default: '{outFolder}'
  },
  {
    name: 'features',
    message: 'Nuxt.js modules:',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios - Promise based HTTP client', value: 'axios' },
      { name: 'Progressive Web App (PWA)', value: 'pwa' }
    ],
    default: []
  },
  {
    name: 'test',
    message: 'Testing framework:',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Jest', value: 'jest' }
    ],
    default: 'jest'
  },
  {
    name: 'mode',
    message: 'Rendering mode:',
    type: 'list',
    choices: [
      { name: 'Universal (SSR / SSG)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'target',
    message: 'Deployment target:',
    type: 'list',
    choices: [
      { name: 'Server (Node.js hosting)', value: 'server' },
      { name: 'Static (Static/Jamstack hosting)', value: 'static' }
    ],
    default: 'server'
  }
]
