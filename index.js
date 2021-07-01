const people = require('./people');

const path = require('path');
const myPath = 'C:/WebDevelopment/Node/Node Core Concept/index.js';

// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(path.parse(myPath));

const os = require('os');
// console.log(os.platform());
// console.log(os.release());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.type());
// console.log(os.cpus());


const fs = require('fs');

// fs.writeFileSync('hello.txt','Hello Jahid')
// fs.appendFileSync('hello.txt',' How Are you ?')

// const data = fs.readFileSync('hello.txt');

// console.log(data.toString());

// fs.readFile('hello.txt',(error,data) => {
//     console.log(data.toString());
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();


// emitter.on('ready', ({event,text}) => {
//     console.log(`ready to run because ${text} ${event}`);
// })

// setTimeout(() => {
//     emitter.emit('ready','timer is start')
// },1000)

// setTimeout(() => {
//     emitter.emit('ready',{
//         event:'start',
//         text:'timer is'
//     })
// },1000)


// const School = require('./school');
// const school = new School();

// school.on('ready',({event,text}) => {
//     console.log(`ready to go because ${text} ${event}`)
// })

// school.startClass()

