const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'react.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                    }
                }
            },
            {
                test: /\.(m?js|jsx)$/i,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-react-jsx'],
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css',
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({
            title: '我是个大笨蛋！！！',
            filename: 'index.html',
            template: 'template.html'
        }),
        new Webpack.DefinePlugin({
            'dev_host':'http://localhost:13000',
        })
    ],
    devServer: {
        port: 10817,
        compress: true,
        contentBase: path.resolve(__dirname, 'build'),
    },
    mode: 'development'
};