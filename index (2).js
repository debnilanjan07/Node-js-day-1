// const http = require("http");

const obj = {
    fname:"Nilanjan ",
    lname : "Deb"
}
const http = require("http");
 http.createServer(function(req,res){
    res.write("<h1>this is our first server</h1>")
    res.write("This is a normal text")
    res.write(JSON.stringify(obj))
    res.write(JSON.stringify({name:"rahul"}))
    res.write("<h2>Hello </h2>")
    res.end("<h1>This is the end of the server</h1>");
    
}).listen(5000)