const http = require("http")
const server = http.createServer(function(request,response){
    response.write("<h1>This is our first server</h1>")
    response.write(JSON.stringify({
        "name":"Nilanjan Deb",
        "age":23
}))
    response.end();
    
})
server.listen(4000);