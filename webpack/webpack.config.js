const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:entry,
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true
    },
    plugins: [
        
        new ExtractTextPlugin('./css/main.css'),
        new HtmlWebpackPlugin({
            title:"fellow20",
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        }),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'./src/*.html'))
        }),
        new webpack.BannerPlugin('fellow 20'),
        new webpack.ProvidePlugin({
            $:'jquery',
        }),
        new CopyPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
      ],
      module:{
          rules:[{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                //use:'css-loader',
                use:[{ 
                    loader:'css-loader',
                    options:{importLoaders:1}
                },'postcss-loader'],
                publicPath:"../"
            })
          },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'file-loader',
                options:{
                    limit:500000,
                    outputPath:'images/'
                }
            }]
        },{
            test:/\.(html|htm)$/i,
            loader:'html-withimg-loader'
        },{
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{presets:'env'}
            }
        },{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','sass-loader']
            })
        }]
      },
      watchOptions:{
          poll:1000,
          aggregateTimeout:500,
          ignored:/node_modules/

      },
      optimization:{
          splitChunks:{
            filename:'assets/js/jquery.js',  
            cacheGroups:{
                jquery:{
                    chunks:'initial',
                    name:'jquery'
                }
            }
          }
      }
}