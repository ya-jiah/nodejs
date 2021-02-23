// var express = require('express');
// var app = express();
// app.get('/',function(request,response){
//     response.send('Hello World');
// })
// var server = app.listen(8081,function(){
//     var host = server.address().address;
//     var prot = server.address().port;
//     console.log('访问网址为：',host,prot)
//  })

var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({//序列化一个对象
        usr: 'zhang',
        psw: '123456'
    });
var option = {
        method: 'post',
        host: 'www',
        prot: '80',
        path:'/nodejs/index.php',
        headers: {
            "Content-Type":"application/x-www-form-urlencoded; charset=utf8",
            "Content-Length":contents.length
        }
    };
var Dispose = function(response){
    var body='';
    response.on('data',function(data){
        body += data;
    });
    response.on('end',function(){
        console.log(body);
    });
};
var req = http.request(option,Dispose);
req.write(contents);//发送内容
req.end();
