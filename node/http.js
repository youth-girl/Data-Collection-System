var http = require('http'),
    fs = require('fs');
var documentRoot = 'F:/web/DataCollectionSystem/Data-Collection-System/src';
http.createServer(function(req,res){
    var url = req.url;
    var file = documentRoot + url;
    fs.readFile(file,function(err, data){
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();
        }
    });
}).listen(1337,'127.0.0.1');
console.log('server runing');