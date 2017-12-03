const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');


module.exports = {

    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mcs.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new OptimizeCssAssetsPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'MSC',
            template: './src/demo.template.html',
        }),
//        new webpack.optimize.UglifyJsPlugin(),

    ],
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {presets: ['es2015']},
            },
            {
                test: /\.css$/,
                oneOf: [
                    {
                        resourceQuery: /inline/, // foo.css?inline
                        use: ['style-loader', 'css-loader'],
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ],
    },
};