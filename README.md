# @whppt/layouts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Whppt layouts plugin.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

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

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) lucasjm <lucas@sveltestudios.com>

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
