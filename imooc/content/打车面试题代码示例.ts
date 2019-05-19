class Car {
  num
  constructor (num) {
    this.num = num
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now(),
      place: null
    }
  }
}

class ParkScreen {
  show(car, inTime) {
    console.log(`${car.number} ${inTime}`)
  }
}

class Floor {
  index: number
  places: Place[]
  constructor (index, places) {
    this.index = index
    this.places = places
  }
  emptyPlaceNum () {
    let num = 0
    this.places.forEach(p => {
      if (p.empty) num++
    })
    return num
  }
}

class Place {
  empty
  constructor () {
    this.empty = true
  }
  in() {
    this.empty = false
  }
  out() {
    this.empty = true
  }
}

class Park {
  floors
  carList: Object
  camera: Camera
  screen: ParkScreen
  constructor (floors) {
    this.floors = floors || []
    this.carList = {}
    this.camera = new Camera()
    this.screen = new ParkScreen()
  }

  in(car) {
    const info = this.camera.shot(car)
    const i = Math.random() * 100 % 100
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    this.carList[car.num] = info
  }

  out(car) {
    const info = this.carList[car.num]
    const place = info.place
    place.out()
    this.screen.show(car, info.inTime)
    delete this.carList[car.num]
  }

  emptyNum() {
    this.floors.map(floor => `${floor.index} has ${floor.emptyPlaceNum()} places`).join('\n')
  }
}

