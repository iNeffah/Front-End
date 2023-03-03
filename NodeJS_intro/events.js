// Events notation in JS + Node.js

const { EventEmitter } = require('events')
const ev = new EventEmitter()

// on()
ev.on('SaySomething', (message) => console.log('I heard you ', message))
ev.emit('SaySomething', 'Neffa')

// once()
ev.once('Greeting', (name) => console.log("What's up?", name))
ev.emit('Greeting', 'Joao')

// inheritance of EventEmitter functions
const { inherits } = require('util')
function Caracter(name) {
    this.name = name
}
inherits(Caracter, EventEmitter)
const heMan = new Caracter('HeMan')
heMan.on('quote', () => console.log(`I, ${heMan.name}, have the power!`)) // I know the quote is kinda incorrect...
console.log('By the power of Greyskull... ')
heMan.emit('quote')