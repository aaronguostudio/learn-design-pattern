class Adaptee {
  specificRequest () {
    return 'This is 220v'
  }
}

class Target {
  constructor () {
    this.adaptee = new Adaptee()
  }

  request () {
    let info = this.adaptee.specificRequest()
    return info
  }
}

