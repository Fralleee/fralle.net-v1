const path = require('path')
const webpack = require('webpack')
// const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const paths = require('./paths')
const resolve = require('./webpack.resolve')

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: ['babel-polyfill', 'react-hot-loader/patch', 'react-dev-utils/webpackHotDevClient', paths.appIndexJs],
  output: {
    path: path.resolve('public'),
    pathinfo: true,
    publicPath: '/',
    filename: 'bundle.min.js',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath)
  },
  resolve,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter
            },
            loader: 'eslint-loader'
          }
        ],
        include: paths.appSrc
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(scss|css)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2|otf|eot|ttf|pdf|xps|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Fralle - DEV SERVER',
      template: '__webpack/template.html',
      filename: path.resolve('public', 'index.html')
    })
  ]
}
