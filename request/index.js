const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){

        res.write(`<html><head><title>Node Form</title></head></html>`);
        res.write(`<body><form method="post" action="/process"><input name="message"/></form></body>`)
        res.end();

    }else if(req.url === '/process' && req.method === 'POST'){

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('Stream Finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
        })

        res.write('Thanks for submit form');
        res.end();

    }else{

        res.write('Page Not Found');
        res.end();

    }
});


server.listen(3000, () => {
    console.log('server is running')
});
