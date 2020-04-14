# fff Create App

[![NPM version](https://img.shields.io/npm/v/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![NPM downloads](https://img.shields.io/npm/dm/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![GitHub Action](https://github.com/nuxt/create-nuxt-app/workflows/ci/badge.svg?branch=master)](https://github.com/nuxt/create-nuxt-app/actions?query=branch%3Amaster++)

> Quickly bootstrap a Vue project, based on our own starter templates.

<details><summary>Preview</summary>

![preview](https://ooo.0o0.ooo/2017/08/05/5984b16ed9749.gif)
</details>

## Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since [npm](https://www.npmjs.com/get-npm) `5.2.0`)

```bash
npx @formfunfunction/create-app <my-project>
```

## Features :tada:

1. Choose the package manager
    - Yarn
    - Npm
2. Choose Nuxt.js modules:
    - [Axios](https://github.com/nuxt-community/axios-module)
    - [Progressive Web App (PWA) Support](https://github.com/nuxt-community/pwa-module)
3. Choose linting tools:
    - [ESLint](https://github.com/nuxt/eslint-config)
    - [Prettier](https://github.com/prettier/prettier)
4. Check the features needed for your project:
    - [PWA](https://pwa.nuxtjs.org/)
    - Linter / Formatter
    - [Prettier](https://prettier.io/)
    - [Axios](https://github.com/nuxt-community/axios-module)
5. Choose your favorite test framework:
    - None
    - [Jest](https://github.com/facebook/jest)
    - [AVA](https://github.com/avajs/ava)
6. Choose rendering mode
    - [Universal (SSR / Static)](https://nuxtjs.org/guide/#server-rendered-universal-ssr-)
    - [SPA](https://nuxtjs.org/guide/#single-page-applications-spa-)
7.  Choose development tools
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

## Credits

- [egoist](https://github.com/egoist)
- [clarko](https://github.com/clarkdo)
- All our contributors ([list](https://github.com/nuxt/create-nuxt-app/contributors)).
