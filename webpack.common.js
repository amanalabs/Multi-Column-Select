const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        polyfills: [
            'babel-polyfill',
        ],
        main: './src/entry.js',
        out: ['./sass/main.scss'],
    },
    //  we don't need TweenLight but webpack complains so added to externals.
    externals: {
        TweenLite: 'TweenLite',
    },
    resolve: {
        alias: {
            'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            'TweenMax': path.resolve('node_modules', 'greensock/src/TweenMax.js'),
            'TimelineMax': path.resolve('node_modules', 'greensock/src/TimelineMax.js'),
            'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'SPA Dev',
            template: 'index.template.html',
        }),
        new ExtractTextPlugin('style.css'),
        new OptimizeCssAssetsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor',
        }),
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')],
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {presets: ['es2015']},
            },
            {
                test: [/\.foo$/],
                exclude: [/node_modules/],
                loader: 'my-loader',
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

                oneOf: [
                    {
                        resourceQuery: /inline/, // foo.css?inline
                        use: ['style-loader', 'css-loader', 'sass-loader'],
                    },
                    {
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            // resolve-url-loader may be chained before sass-loader if necessary
                            use: ['css-loader', 'sass-loader'],
                        }),
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
        ],
    },
};
