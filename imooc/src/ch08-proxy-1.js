class ReadImg {
  constructor (fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }

  display () {
    console.log('displaying...', this.fileName);
  }

  loadFromDisk () {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor (fileName) {
    this.realImg = new RealImg(fileName)
  }
  display () {
    this.realImg.display()
  }
}