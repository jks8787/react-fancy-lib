var path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    query: {
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                'postcss-loader'
            ]
        }),
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    query: {
                        sourceMap: true,
                        importLoaders: 2,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                'sass-loader'
            ]
        }),
    },
],
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
  externals: {
    'react': 'commonjs react'
  }
};
