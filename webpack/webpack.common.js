const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

module.exports={
    entry:{
        bundle:'./src/js/index.js'
    },
    output:{
        filename:"js/[name].js",
        chunkFilename:"js/[name]-shared.js",
    },
    module:{
        rules:[
            {
                test:/\.(eot|ttf|woff|woff2)$/,
                loader:"url-loader?limit=100000"
            },
            {
                test:/\.(svg|gif|png|jpe?g)$/,
                loader:'file-loader',
                options:{
                    name:'[path][name].[ext]',
                    context: 'src',
                    publicPath: "../"
                }
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: "babel-loader"
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        })


    ]
}
