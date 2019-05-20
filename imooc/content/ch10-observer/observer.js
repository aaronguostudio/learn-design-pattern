// Examples
// 1. bind event
// 2. promise
// 3. nodejs 自定义事件

const EventEmitter = require('events').EventEmitter
const emitter1 = new EventEmitter()
emitter1.on('test', name => {
  console.log('> test on', name)
})
emitter1.on('test', name => {
  console.log('> test on', name)
})
emitter1.emit('test', 'aaron')

// 4. nodejs read file stream
const fs = require('fs')
const readStream = fs.createReadStream('./test.txt')
var length = 0
readStream.on('data', (chunk) => {
  console.log('>>>chunk', chunk.toString().length)
  length += chunk.toString().length
})
readStream.on('end', () => {
  console.log('>>>', length)
})

// readline
const readline = require('readline')
const rl = readline.createInterface({
  input: fs.createReadStream('./test.txt')
})
var lineNum = 0
rl.on('line', line => {
  console.log('>>>>>>>>>>line', line)
  lineNum++
})
rl.on('close', () => {
  console.log('>>>>>>end', lineNum)
})