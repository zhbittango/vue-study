const path = require('path'); //node包

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/', //涉及url路径的，都会加上此路径
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
      }
    ]
  }
}