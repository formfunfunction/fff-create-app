# fff Create App

[![NPM version](https://img.shields.io/npm/v/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![NPM downloads](https://img.shields.io/npm/dm/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![GitHub Action](https://github.com/nuxt/create-nuxt-app/workflows/ci/badge.svg?branch=master)](https://github.com/nuxt/create-nuxt-app/actions?query=branch%3Amaster++)

> Create a [Nuxt.js](https://nuxtjs.org) project in seconds

## Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since [npm](https://www.npmjs.com/get-npm) `5.2.0`)

```bash
npx create-fff-nuxt-app <my-project>
```

Or starting with npm v6.1 you can do:

```bash
npm init create-fff-nuxt-app@latest <my-project>
```

Or with [yarn](https://yarnpkg.com/en/):

```bash
yarn create fff-nuxt-app <my-project>
```

## Features :tada:

1. Nuxt.js modules:
    - [Axios - Promise based HTTP client](https://github.com/nuxt-community/axios-module)
    - [Progressive Web App (PWA)](https://github.com/nuxt-community/pwa-module)
2. Linting tools:
    - [ESLint](https://github.com/nuxt/eslint-config)
    - [Prettier](https://github.com/prettier/prettier)
    - [StyleLint](https://github.com/stylelint/stylelint)
3. Testing framework:
    - None
    - [Jest](https://github.com/facebook/jest)
    - [AVA](https://github.com/avajs/ava)
    - [WebdriverIO](https://webdriver.io)
    - [Nightwatch](https://nightwatchjs.org)
4. Rendering mode
    - [Universal (SSR / Static)](https://nuxtjs.org/guide/#server-rendered-universal-ssr-)
    - [SPA](https://nuxtjs.org/guide/#single-page-applications-spa-)
5. Deployment target
    - [Server (Node.js hosting)](https://nuxtjs.org/api/configuration-target)
    - [Static (Static/JAMStack hosting)](https://nuxtjs.org/api/configuration-target)
6. Development tools
    - [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)

## CLI Options

### `--edge`

Alias: `-e`.

To install [nuxt-edge](https://www.npmjs.com/package/nuxt-edge) instead of [nuxt](https://www.npmjs.com/package/nuxt), add the command line option `--edge`:

```bash
npx @formfunfunction/create-app <my-project> --edge
```

### `--info`

Alias: `-i`. Print out debugging information relating to the local environment and exit.

### `--help`

Alias: `-h`. Show the help information and exit, include: usage, command and all cli options.

### `--verbose`

Show debug logs

### `--version`

Alias: `-v`. Show version number and exit.

### `--overwrite-dir`

Overwrite the target directory.

## Credits

- [egoist](https://github.com/egoist)
- [clarko](https://github.com/clarkdo)
- All our contributors ([list](https://github.com/nuxt/create-nuxt-app/contributors)).
