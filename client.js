var http = require('http');
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.php'
};
var callback = function(response){
    var body = '';
    response.on('data',function(data){
        body += data;
    });
    response.on('end',function(){
        console.log(body);
    });
};
http.request(options,callback).end();
