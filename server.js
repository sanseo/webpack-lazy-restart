const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const config =require('./webpack.config.js');
const compiler = webpack(config);


//相当于手动封装一个webpack服务器，运行webpack，根据config.js生产内容，然后在把内容通过中间件封装，最后给
//通过express.use进行模板的调用，listen设置打开一个端口监听，链接对应模板
app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.listen(3000,function () {
   console.log('Example app listening on port 3000!\n');
});