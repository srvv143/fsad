var http=require('http');
var cal=require('./oper');
var x=10, y=20;
http.createServer(function(request,response){
     response.writeHead(200,{'content-Type':'text/html'});
     response.write("<b>Addition is:"+cal.add(x,y)+"<br>");
     response.write("<b>Subtraction is:"+cal.sub(x,y)+"<br>");
     response.write("<b>Multiplication is:"+cal.mul(x,y)+"<br>");
     response.write("<b>Division is:"+cal.div(x,y)+"<br>");
     response.end();
}).listen(8081);
console.log('server started successfully at http://127.0.0.1:8081/');
     