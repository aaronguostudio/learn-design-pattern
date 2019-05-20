const star = {
  name: 'Aaron',
  age: 20,
  phone: 12442352345
}

const agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      return 312431234
    }
    if (key === 'price') {
      // agent will return the price
      return 12234
    }

    // if the key is not phone and price, return from star
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 10000) {
        throw new Error('Price is too low')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

export default agent