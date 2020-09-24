const { join, resolve } = require('path');

module.exports = function (moduleOptions) {
  const filesDir = 'whppt/layouts';

  const options = {
    ...moduleOptions,
  };

  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'components'),
      prefix: 'layout',
    });
  });

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: join(filesDir, 'whppt-layouts.js'),
    options,
  });

  this.addTemplate({
    src: resolve(__dirname, 'components/SplitContent/Editor.vue'),
    fileName: join(filesDir, 'components/SplitContent/Editor.vue'),
    options,
  });
};

module.exports.install = (Vue, options) => require('./register').default(Vue, options);
module.exports.meta = require('../package.json');
