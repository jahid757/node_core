const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url === '/'){
        res.write('server send output from root/home page');
        res.end();
    }else if(req.url === '/about'){
        res.write('server send output from about page');
        res.end();
    }else{
        res.write('page not found');
        res.end();
    }
});



server.on('connection', () => {
    console.log('server is running now');
})



server.listen(3000);
console.log('server is running');