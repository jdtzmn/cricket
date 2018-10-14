const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')
const typedocConfig = require('./typedoc.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist', 'docs']),
    new TypedocWebpackPlugin({
      ...typedocConfig,
      out: '../docs'
    })
  ]
})
