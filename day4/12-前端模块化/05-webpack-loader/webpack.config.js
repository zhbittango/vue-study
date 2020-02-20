const path = require('path'); //node包

// 打包后js头部自动生成注释;BannerPlugin(webpack内置，不需要安装)
const webpack = require('webpack');  

// dist目录下生成自动生成包含打包后js的html文件;npm install --save-dev html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin'); 

// js代码压缩;npm install --save-dev uglifyjs-webpack-plugin
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin') 

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/', //涉及url路径的，都会加上此路径
  },
  resolve: {

    // extensions: ['.js', '.css', '.less', '.vue'],
    // 别名
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }
      ]},
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //小于limit(8kb)时，会将图片编译成base64字符串形式
              //大于limit(8kb)时，需要使用file-loader模块进行加载
              limit: 8192,
              name:'img/[name].[hash:8].[ext]', //生成文件路径及名称
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('vue-study\ncreate by ngota\ndate:20200220\nReleased under the MIT License.\n'),
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    // new uglifyJsWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 9527,
  }
}