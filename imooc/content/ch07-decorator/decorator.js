class Circle {
  draw () {
    console.log('> Draw circle')
  }
}

class Decorator {
  constructor (circle) {
    this.circle = circle
  }
  draw () {
    this.circle.draw()
    this.setRedBorder()
  }
  setRedBorder (circle) {
    console.log('> Red border')
  }
}

const c = new Circle()
c.draw()

const cDec = new Decorator(c)
cDec.draw()

// Examples:
// 1. core-decorator
//    https://www.npmjs.com/package/core-decorators












