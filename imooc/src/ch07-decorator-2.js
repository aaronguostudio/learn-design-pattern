class MathAdd {
  @log
  add(a, b) {
    return a + b
  }
}

function log (target, name, descriptor) {
  console.log('> target', target)
  console.log('> name', name)
  console.log('> descriptor', descriptor)
  var oldValue = descriptor.value

  descriptor.value = function () {
    console.log(`calling ${name} with`, arguments)
    return oldValue.apply(this, arguments);
  }

  return descriptor
}

function readonly (target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

class ReadonlyPerson {
  constructure (first, last) {
    this.first = first
    this.last = last
  }

  @readonly
  name () {
    return `${this.first} ${this.last}`
  }
}

module.exports.MathAdd = MathAdd
module.exports.ReadonlyPerson = ReadonlyPerson