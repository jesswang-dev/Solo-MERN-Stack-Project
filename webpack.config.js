const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
            },
          },
        },
        {
            test: /\.html$/,
            use: "html-loader"
          },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
            publicPath: '/',
        },
        proxy: {
            '/api/**' : {
                target: 'http://localhost:3000/',
                secure: false
            }
        }
      },

    //   resolve: {
    //     extensions: ['.js', '.jsx'],
    //   }
    
  };