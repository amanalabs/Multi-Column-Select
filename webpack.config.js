const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const filename = 'multi-column-select';
let cssFileName = filename;
let jsFileName = filename;

var MIN = JSON.parse(process.env.PROD_ENV || false);

if (MIN){
    cssFileName = filename+'.min.css';
    jsFileName = filename+'.min.js';
}else{
    cssFileName = filename+'.css';
    jsFileName = filename+'.js';
}

const plugins =[
    new ExtractTextPlugin(cssFileName),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('libary')
        }
    }),
    new HtmlWebpackPlugin({
        inject: false,
        title: 'MSC',
        template: './src/demo.template.html',
    }),
    new ExtractTextPlugin(cssFileName)
];

if (!MIN){
    plugins.push(
        new CleanWebpackPlugin(['dist'])
    );
}

if (MIN){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    );

    plugins.push(
        new OptimizeCssAssetsPlugin()
    );
}

module.exports = {

    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: MIN ? 'multiColumnSelect.min.js' : 'multiColumnSelect.js',
        libraryTarget: 'umd',
        library: 'multiColumnSelect',
        umdNamedDefine: true,
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules(?!\/webpack-dev-server)/,
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