var http=require('http');
http.createServer(function(request,response){
     response.writeHead(200,{'Content-Type':'text/html'});
     response.write("<b>Hello World!</b>");
     response.end();
}).listen(8081);
console.log('server started successfully at http://127.0.0.1:8081/');