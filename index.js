const http= require('http');
const fs= require('fs');

const server= http.createServer(function (req, res){

    //Home Page
    if(req.url=='/'){
        res.end("This is the Home Page");
    }

    //About Page
    if(req.url=='/about'){
        res.end("This is the About Page");
    }

    //Contact Page
    if(req.url=='/contact'){
        res.end("This is the Contact Page");
    }

    //File write
    if(req.url=='/file-write'){
        // const data= fs.writeFileSync('demo.txt', 'hello world');
        // res.end("File-write operation is successful!");
        
                        //or
        async function createFile(){
            try{
                const data= await fs.writeFileSync('demo.txt', 'hello world');
                res.end("File-write operation is successful!");
            } catch(err){
                res.end(err);
            }
        }
        (async ()=>{
            await createFile();
        })();
    }

});

server.listen(5500, function(){
    console.log("Server is running on port 5500...");
});