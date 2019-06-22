class Iterator {
  constructor (container) {
    this.list = container.list
    this.index = 0
  }
  next () {
    if (this.hasNext()) return this.list[this.index++]
    return null
  }
  hasNext () {
    if (this.index >= this.list.length) return false
    return true
  }
}

class Container {
  constructor (list) {
    this.list = list
  }

  getIterator () {
    return new Iterator(this)
  }
}

let arr = [1, 2, 3, 4, 5]
let container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasNext()) {
  console.log(iterator.next())
}

// ES6 中的有序数据集合
// Array, Map, Set, String, TypedArray, arguments, NodeList
// Object 不是有序数据集合，可以转换成 Map 变成有序
// for (.. of ..) 就是 ES6 对迭代器的一个使用

console.log('---------------- ES6 Iterator')

function each (data) {
  let iterator = data[Symbol.iterator]()
  let item = { done: false }
  while(!item.done) {
    item = iterator.next()
    if (!item.done) console.log(item.value)
  }
}

each(arr)

console.log('---------------- ES6 Iterator')
function each2 (data) {
  for (let item of data) {
    console.log('> item', item)
  }
}

each2(arr)