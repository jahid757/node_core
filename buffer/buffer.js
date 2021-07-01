const fs = require('fs');

// const data = fs.readFile('/lorem.txt');

const readStream = fs.createReadStream(`${__dirname}/lorem.txt`, 'utf-8');

readStream.on('data', (data) => {
    console.log(data/*.toString()*/);
})
