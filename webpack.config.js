/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-07-17 20:14:13
 * @LastEditTime: 2019-07-18 11:17:11
 * @LastEditors: 靳肖健
 */
module.exports = {
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: '7070',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",

        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
                hashPrefix: 'my-custom-hash',
              },
            }
          }
        ]
      }
    ]
  }
}