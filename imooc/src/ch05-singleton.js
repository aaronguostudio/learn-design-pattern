class SingleObject {
  constructor () {
    this.count = 0
  }
  invoke () { console.log(this.count++) }
}

SingleObject.prototype.getCount = function () {
  console.log()
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

class SingleLoginForm {
  constructor () {
    this.title = 'Login'
    this.state = 'hide'
    this.showCount = 0
  }
  show () {
    if (this.state === 'show') return
    this.showCount++
    this.state = 'show'
    console.log(`> ${this.title} show, ${this.showCount} times`)
  }
  hide () {
    this.state = 'hide'
    console.log(`> ${this.title} hide`)
  }
}

SingleLoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) instance = new SingleLoginForm()
    return instance
  }
})();


module.exports.SingleObject = SingleObject
module.exports.SingleLoginForm = SingleLoginForm