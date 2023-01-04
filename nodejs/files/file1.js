var http=require('http');
var fs=require('fs');
http.createServer(function(request,response){
    fs.readFile('file1.html',function(err,data){
        response.writeHead(200,{'content-Type':'text/html'});
        response.write(data);
        response.end();
});
}).listen(8081);
console.log('http://127.0.0.1:8081/');