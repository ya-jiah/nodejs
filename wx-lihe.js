var http = require('http');
var querystring = require('querystring');
var iids=801;//拆奖者id 801 802 803
var yids=1;//领奖着id 4-804
// 向服务端发送请求
function printHello(){
    if(yids>800){//达到指定拆礼物量以后停止
        clearTimeout(t);
    }
    if(iids>803){
        Receive(yids);//拆奖达到3就领取奖励
        iids=801;
        yids++;
    }
    Dismantle();
    iids++;
}
// 1秒后执行以上函数
var t=setInterval(printHello, 1000);


/******************模拟拆奖******************/
function Dismantle(){
    // 这就是post发送的数据
    var contents = querystring.stringify({
        yid: yids,//分享id
        iid: iids,//拆礼物id
        action: 'add'
    });

    //请求选项
    var options = {
        method: 'get',
        host: 'wx-lihe',
        port: '80',
        //path: '/test.php?action=add&yid='+yids+'&iid='+iids,
        //path: '/unknit.php?action=add&yid='+yids+'&iid='+iids,
        path: '/unknits.php?action=add&yid='+yids+'&iid='+iids,
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
}
/******************模拟拆奖******************/

/******************模拟领奖******************/
function Receive(id){
    //请求选项
    var options = {
        method: 'get',
        host: 'wx-lihe',
        port: '80',
        //path: '/test.php?action=add&yid='+yids+'&iid='+iids,
        //path: '/unknit.php?action=add&yid='+yids+'&iid='+iids,
        path: '/opens.php?id='+id,
        headers: {// 必选信息
            "Content-Type":"application/x-www-form-urlencoded; charset=utf8", // 可以设置一下编码
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
    req.end();
}
/******************模拟领奖******************/