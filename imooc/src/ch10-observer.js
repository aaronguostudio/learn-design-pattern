// 发布&订阅
// 一对多

export class Subject {
  constructor () {
    this.state = 0
    this.observers = []
  }

  getState () {
    return this.state
  }

  setState (state) {
    this.state = state
    this.notifyAllObservers()
  }

  notifyAllObservers () {
    this.observers.map(o => o.update())
  }

  attach(observer) {
    this.observers.push(observer)
  }  
}

export class Observer {
  constructor (name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}