//modules - Encapsulated code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')
const data  = require('./6-alternative')
require('./7-mind-grenade')
console.log(data);

sayHi(names.name1)
sayHi(names.name2)
