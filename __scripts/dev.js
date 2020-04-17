process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
process.on('unhandledRejection', err => {
  throw err
})

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')

const paths = require('../__webpack/paths')
const config = require('../__webpack/webpack.config.dev')
const createDevServerConfig = require('../__webpack/webpack.devServer')

const APPNAME = require(paths.appPackageJson).name
const DEFAULT_PORT = 3000
const HOST = process.env.HOST || '0.0.0.0'
const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http'
const urls = prepareUrls(PROTOCOL, HOST, DEFAULT_PORT)
const compiler = createCompiler(webpack, config, APPNAME, urls)
const serverConfig = createDevServerConfig(null, urls.lanUrlForConfig)

const devServer = new WebpackDevServer(compiler, serverConfig)
devServer.listen(DEFAULT_PORT, HOST, err => {
  if (err) {
    return console.log(err)
  }
  openBrowser(urls.localUrlForBrowser)
})
