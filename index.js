var express = require('express');
var app = express();
    app.listen(8081,function(){
        console.log('开始监听8081端口');
    });
    //get主页
    app.get('/',function(request,response){
        console.log('主页请求！');
        response.send('Hello Get');
    });
    //post
    app.post('/',function(request,response){
        console.log('POST请求！');
        response.send('Post主页');
    });
    //访问/del_user路径时触发删除
    app.delete('/del_user',function(request,response){
        console.log('请求del_user的delete！');
        response.send('删除del_user');
    });
    //get请求list_user页面
    app.get('/list_user',function(request,response){
        console.log('请求list_user！');
        response.send('get请求list_user');
    });
    //对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
    app.get('/ab*cd',function(request,response){
        console.log('/ab*cd匹配get请求');
        response.send('ab*cd页面');
    });

