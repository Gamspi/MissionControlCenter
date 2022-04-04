const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin")
const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if(isProd){
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config


}

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: ["@babel/polyfill", "./index.tsx"],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 3000,
        hot: isDev
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    "css-loader",
                    "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"

                        ]
                    }
                }
            }

        ]
    }
}
