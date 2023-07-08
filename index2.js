// How to create a Basic Server??
// const http =  require('http');

// http.createServer((res, resp) =>{        //here we use higher oder function
//     resp.write('hello, i am your first server')
//     resp.end();

// }).listen(4500);
         //or
// you can also send here html tags like- h1 
// http.createServer((res, resp) =>{
//     resp.write('<h1>hello, i am your first server<h1>')
//     resp.end();

// }).listen(4500);


const http = require('http')

http.createServer((res, resp) =>{
    resp.write(" Hello i'm a Server ")
    resp.end();
}).listen(5000);


















