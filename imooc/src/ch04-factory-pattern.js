class Product {
  constructor (name) {
    this.name = name
  }

  init () {
    console.log('> init')
  }

  fun1 () {
    console.log('> fun1')
  }
}

// 相当于 Creator 对 Product 实现了一个封装
class Creator {
  create (name) {
    return new Product(name)
  }
}

// 实例
// 1. jQuery
// $('div') 其实是调用了一个工厂函数

// 2. React.createElement
// React.createElement("div", null, React.createElement(...))
// 源码
// React.createElement = function (tag, attrs, children) {
//  return new Vnode(tag, attrs, children)
// }