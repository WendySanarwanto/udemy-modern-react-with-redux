const path = require('path');
const webpack = require('webpack');

const styleDirPath = path.join( __dirname, 'style' );

module.exports = {
  entry: [
    './src/index.js',
    styleDirPath + '/style.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: styleDirPath
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: './',
    port:3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({multiStep: true})
  ]
};
