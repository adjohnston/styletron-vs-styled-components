import { resolve } from 'path'
import { HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  dev: {
    eval: true
  },

  devServer: {
    hot: true,
    inline: true,
    noInfo: true,
    port: 8000
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}
