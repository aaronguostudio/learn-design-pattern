// Simple

@testDec
class Demo {

}

function testDec (target) {
  target.isDec = true
}

module.exports.Demo = Demo


// has param
@testDec2(true)
class Demo2 {

}

function testDec2 (isDec) {
  return function (target) {
    target.isDec = isDec
  }
}

module.exports.Demo2 = Demo2


// ES7 装饰器
// core-decorators  lib for decorators

const Foo = {
  foo () {
    return 'foo'
  }
}

// vue mixins is an example of using decorator

function mixins (...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

@mixins(Foo)
class MyClass {

}

module.exports.MyClass = MyClass
