const webpack = require('webpack')
const copyWebpackPlugin = require('copy-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const paths = require('./paths')
const resolve = require('./webpack.resolve')
const pkg = require('../package.json')

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: {
    // vendor: pkg.dependencies,
    app: [paths.appIndexJs]
  },
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'js/[name].min.[chunkhash:16].js',
    devtoolModuleFilenameTemplate: info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
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
          compact: true
        }
      },
      {
        test: /\.(scss|css)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 1,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2|eot|ttf|pdf|xps|webp)$/,
        loader: 'url-loader?limit=25000'
      }
    ]
  },

  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      filename: 'js/vendor.min.[chunkhash:16].js',
      chunks: 'all'
    },
    noEmitOnErrors: true,
    concatenateModules: true
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('plugin-report.txt'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ManifestPlugin({
      fileName: 'public/asset-manifest.json'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Fralle – Designer and developer',
      template: '__webpack/template.html',
      filename: 'index.php'
    }),
    new copyWebpackPlugin([{ from: paths.appPublic, to: 'public' }])
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
