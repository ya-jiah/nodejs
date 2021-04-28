var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    usr: 'zhangsiming',//分享id
});

//请求选项
var options = {
    method: 'post',
    host: 'php',
    port: '80',
    path: '/index.php',
    headers: {// 必选信息
        "Content-Type":"application/x-www-form-urlencoded; charset=utf8", // 可以设置一下编码
        "Content-Length":contents.length, // 请求长度, 通过上面计算得到
    }
};
var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
}
var req = http.request(options, callback);
req.write(contents);
req.end();
//测试yii框架使用post时易出现400错误，应该是_csrf的原因