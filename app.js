const htmlStandards = require('reshape-standard')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  matchers: {css: '*(**/)*.scss'},
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  module: {
    rules: [{test: /\.scss/, use: [{loader: 'sass-loader'}]}]
  },
  reshape: htmlStandards({
    locals: (ctx) => { return {pageId: pageId(ctx)} },
    minify: env === 'production'
  }),
  postcss: {plugins: [autoprefixer()]},
  babel: jsStandards()
}
