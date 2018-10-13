const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js'
  },
  devtool: '#eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 9999,
    host: 'beggar.yefun.top',
    https: {
      key: fs.readFileSync('ssl/2_beggar.yefun.top.key'),
      cert: fs.readFileSync('ssl/1_beggar.yefun.top_bundle.crt')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            loader: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader', options: { minimize: false } }
            ]
          },
          {
            loader: [{ loader: 'css-loader' }]
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.pack' + '.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new VueLoaderPlugin(),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js')
    })
    // new WorkboxPlugin.GenerateSW()
    // new SkeletonPlugin({
    //   pathname: path.resolve(__dirname, `shell`),
    //   staticDir: path.resolve(__dirname, 'dist'),
    //   routes: ['/'],
    //   port: '7890'
    // })
    // new BundleAnalyzerPlugin({
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 8989
    // })
  ]
};
