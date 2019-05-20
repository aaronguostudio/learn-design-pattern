import loadImg from './ch03-single-promise'
import { SingleObject, SingleLoginForm } from './ch05-singleton'

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