# @whppt/layouts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> A layout plugin for @whppt/nuxt. Implement configurable layouts in seconds. 

[📖 **Release Notes**](./CHANGELOG.md)

## Table of Contents

- [Features](#features)
- [Installation](#features)
- [Usage](#usage)
- [Options](#options)
- [License](#license)

## Features
- [Split Content Component](./docs/SplitContent.md)

## Usage
1. Add `@whppt/layouts` dependency to your project

```bash
yarn add @whppt/layouts # or npm install @whppt/layouts
```

2. Add `@whppt/layouts` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@whppt/layouts',

    // With options
    ['@whppt/layouts', { /* module options */ }]
  ]
}
```

3. create a nuxt plugin, eg. `~/plugins/layouts.js`
```js
import Vue from 'vue'
import layouts from '@whppt/layouts'

Vue.use(layouts)
```

4. Make a few updates to your `~/nuxt.config.js` file.
```js
export default {
  /* Rest of your config */
  plugins: {
    '~/plugins/layouts.js',
    /* Rest of your plugins */
  },
  /*
   * Note: the transpile step is only required if using the Vue.use() method,
   * if using Vue.component() to register the components omit the following.
   */
  build: {
    transpile: ['@whppt/layouts'],
  },
}
```

5. Check the documentation for any layout components you wish to use on how to register and initialise each component in whppt.

## Options

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@whppt/layouts/latest.svg
[npm-version-href]: https://npmjs.com/package/@whppt/layouts

[npm-downloads-src]: https://img.shields.io/npm/dt/@whppt/layouts.svg
[npm-downloads-href]: https://npmjs.com/package/@whppt/layouts

[github-actions-ci-src]: https://github.com/whpptjs/layouts/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/whpptjs/layouts/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/whpptjs/layouts.svg
[codecov-href]: https://codecov.io/gh/whpptjs/layouts

[license-src]: https://img.shields.io/npm/l/@whppt/layouts.svg
[license-href]: https://npmjs.com/package/@whppt/layouts
