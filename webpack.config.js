var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './entry.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //    warnings: false
    //   },
    //   sourceMap: true
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.png$/, loader: 'url' },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
        exclude: /(node_modules)/
      }
    ]
  }
};
