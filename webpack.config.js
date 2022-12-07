const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry:  './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
        //clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader'
                      },

                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                          sourceMap: true,
                          // options...
                        }
                      }
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo app',
            template: './src/indexTemplate.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        })
    ],
    watch: true
};