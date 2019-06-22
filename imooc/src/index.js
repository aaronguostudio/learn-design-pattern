import $ from 'jquery'
import loadImg from './ch03-single-promise'
import { SingleObject, SingleLoginForm } from './ch05-singleton'
import { MyClass } from './ch07-decorator-1'
import { MathAdd, ReadonlyPerson } from './ch07-decorator-2'
import agent from './ch08-proxy-2'
import { Observer, Subject } from './ch10-observer'
import fsm from './ch12-state-machine'


// Parent
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  eat () {
    console.log('> eat')
  }

  speak () {
    console.log('> speak')
  }
}

class Student extends Person {
  constructor(name, age, id) {
    super(name, age)
    this.id = id
  }

  get studentId () {
    return this.id
  }

  study () {
    console.log('> study')
  }
}

let a = new Student('Aaron', 32, 'WF234F')

a.eat()
a.study()
console.log(a.studentId)

// Single purpose
// each then will do one then
// new feature will apply new then block, instead of change the existing code
// the better way is using modules in different then blocks
let src = 'https://kudosee.com/statics/brand/logo-2.svg'
let result = loadImg(src)
result.then(img => {
  console.log('> img step 1', img)
  return img
}).then(img => {
  console.log('> img step 2', img)
}).catch(err => {
  console.log('> err', err)
})

// Singleton
// 不要使用 new 来创建对象
let so1 = SingleObject.getInstance()
so1.invoke()
so1.invoke()
let so2 = SingleObject.getInstance()
so2.invoke()
so2.invoke()
let so3 = SingleObject.getInstance()
so3.invoke()
so3.invoke()
console.log('> Are they singleton', so1 === so2, so1 === so3, so2 === so3)

let loginForm1 = SingleLoginForm.getInstance()
loginForm1.show()
loginForm1.show()
loginForm1.show()
loginForm1.hide()
loginForm1.show()

let loginForm2 = SingleLoginForm.getInstance()
loginForm2.show()
loginForm2.hide()
loginForm2.show()

// Decorator
console.log('>>> Decorator')
let obj = new MyClass()
console.log('>', obj.foo())

let mathAdd = new MathAdd()
mathAdd.add()

let p = new ReadonlyPerson('Aaron', 'Guo')
console.log('>', p.name)
// Can't write
// p.name = function () {}

// Proxy
console.log('>>> Proxy')
console.log(agent.name)
console.log(agent.phone)
console.log(agent.price)
console.log(agent.age)
agent.customPrice = 100000
// price is too low

try {
  agent.customPrice = 100
} catch (err) {
  console.log('> custom price is not ok')
}

// Observer
console.log('>>> Observer')
let s = new Subject()
new Observer('o1', s)
new Observer('o2', s)
new Observer('o3', s)
s.setState(1)
s.setState(2)
s.setState(3)


// State

let $btn = $('#btn1')
$btn.click(() => {
  if (fsm.is('收藏')) {
    fsm.doState()
    updateText()
  } else {
    fsm.deleteStore()
    updateText()
  }
})

function updateText () {
  $btn.text(fsm.state)
}

updateText()