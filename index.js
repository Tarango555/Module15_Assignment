const http= require('http');

const server= http.createServer(function (req, res){

    //Home Page
    if(req.url=='/'){
        res.end("This is the Home Page");
    }

    //About Page
    if(req.url=='/about'){
        res.end("This is the About Page");
    }

    

});

server.listen(5500, function(){
    console.log("Server is running on port 5500...");
});