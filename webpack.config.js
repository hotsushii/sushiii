const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  resolve: {
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill', './lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      },
      {test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })}
    ]
  },
  plugins: [ new ExtractTextPlugin('styles.css') ]
};

module.exports = config;
