var express = require('express');
var app = express();
    app.listen(8081,function(){
        console.log('开始监听8081端口');
    });
    //get用来接收get请求， 第一个参数是检测符合的请求路径，第二个参数是回调函数
    app.get('/',function(request,response){
        response.send(request.protocol);
    });