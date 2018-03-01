'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/oc-client.js',
  externals: {
    jquery: 'jQuery',
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    libraryTarget: 'umd',
    library: 'oc',
  },
};
