const http= require('http');

const server= http.createServer(function (req, res){

});

server.listen(5500, function(){
    console.log("Server is running on port 5500...");
});