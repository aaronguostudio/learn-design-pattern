class SingleObject {
  login () {
    console.log('> login')
  }
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

// Examples
// 1. jQuery
if (window.$ != null) return window.jQuery
return // init jQuery