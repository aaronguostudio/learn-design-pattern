// 状态模式
// 每一个对象有状态的变化
// 每次状态变化都会触发一个逻辑

// 状态
class State {
  constructor (color) {
    this.color = color
  }

  handle (context) {
    console.log('> turn color')
    context.setState(this)
  }
}

// 主体/实例
class Context {
  constructor () {
    this.state = null
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state
  }
}

let context = new Context()

let red = new State('red')
let green = new State('green')
let yellow = new State('yellow')

green.handle(context)
console.log('>context', context.getState())

// 场景，有限状态机

// 简单的 Promise