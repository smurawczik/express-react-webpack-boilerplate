const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: {
      app: './app/pages/home/Home.hydrate.js',
      page1: './app/pages/search/Search.hydrate.js',
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    ],
    mode: 'development',
  	output: {
  		filename: '[name].js',
  	  path: path.resolve(__dirname, 'build')
  	},
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        },
        {
          test: /\.(s)*css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ]
        }
      ]
    }
  },
  {
    entry: {
      server: './index.js'
    },
    mode: 'development',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build')
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
];
