const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInline = require("html-webpack-inline-source-plugin");

const Webpack = require('webpack');
const Path = require('path');

module.exports = (env) => ({
    context: __dirname,
    entry: './app/index.tsx',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: env === "production" ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['.', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: env === "production" ? "[sha1:hash:hex:5]" : "[local]"
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["app"]
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            __PRODUCTION__: env === "production"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: "./app/index.html",
            filename: "./index.html",
            inlineSource: env === "production" ? /\.css$/ : false
        }),
        new HtmlWebpackInline(HtmlWebpackPlugin)
    ],
    mode: 'development',
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
});