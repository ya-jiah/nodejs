/*var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');//用来处理请求中body中内容
var nulter = erquire('mulyer');//用来处理上传文件是body-parser的一个中间件*/

//中间件

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World');
})
//app.get('/test', function (req, res) {
//    app.use(express.static('public2'));
//    res.send('Hello World');
//})
var server = app.listen(8081, function () {
    console.log("应用实例")
})
