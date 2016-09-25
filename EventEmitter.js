/*
this is not learnyounode is the TheNetNinja tutorial on youtube
*/
const events = require('events')
const util = require('util')
let myEmmiter = new events.EventEmitter()
myEmmiter.on('someEvent', function(msg){
  console.log(msg)
})

let Person = function(name){
  this.name = name
}

util.inherits(Person, events.EventEmitter)
myEmmiter.emit('someEvent', "Hi Im Rony")
let rony = new Person('rony')
let karla = new Person('karla')
let genesis = new Person('genesis')
let litza = new Person('litza')
let people = [rony, karla, litza, genesis]

people.forEach(function(person) {
  person.on('speak', (msg) => {console.log(`${person.name} said: ${msg}`)})
})
rony.emit('speak','hey dudes')
litza.emit('speak','yo sup')
