const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');


module.exports = [
  {
    entry: {
      app: './app/pages/home/Home.hydrate.js',
      page1: './app/pages/search/Search.hydrate.js',
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
    ],
    mode: 'development',
  	output: {
  		filename: 'scripts/[name].bundle.js',
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
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
