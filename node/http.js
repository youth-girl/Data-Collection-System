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
            res.write('<h1>404����</h1><p>��Ҫ�ҵ�ҳ�治����</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//��index.html��ʾ�ڿͻ���
            res.end();
        }
    });
}).listen(1337,'127.0.0.1');
console.log('server runing');