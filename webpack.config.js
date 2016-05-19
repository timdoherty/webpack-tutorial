var webpack = require('webpack');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
       warnings: false
      },
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.png$/, loader: 'url' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
