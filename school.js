const EventEmitter = require('events');

class School extends EventEmitter {
    startClass () {
        console.log('class start')

        setTimeout(() => {
            this.emit('ready',{
                event:'end',
                text:'class is'
            })
        },2000)
    }
}

module.exports = School;