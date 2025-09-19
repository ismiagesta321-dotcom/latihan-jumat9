const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html',
    });
    res.write('Hello Word');
    res.end();
});
server.listen(port,()=>{
    console.log(`Listening is Listening on port ${port}..`);
});