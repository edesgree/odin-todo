const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo app',
            template: './src/indexTemplate.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    "css-loader",

                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, './sass')]
                            }
                        },
                    },
                ],
            },
            {
                test: /\.(webp|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator:{
                    filename: 'assets/img/[hash][ext][query]'
                }
            },
        ],
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    watch: true
};