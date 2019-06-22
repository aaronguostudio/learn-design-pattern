import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve: (state, data) => {
      // state is the state machine instance
      // fsm.resolve(xxx) 传递的参数
      data.successList.forEach(fn => fn())
    },
    onReject: (state, data) => {
      // state is the state machine instance
      // fsm.resolve(xxx) 传递的参数
      data.failList.forEach(fn => fn())
    }
  }
})

// 定义 Promise
class MyPromise {
  constructor (fn) {
    this.successList = []
    this.failList = []

    fn (function () {
      fsm.resolve(this)
    }, function () {
      fsm.reject(this)
    })
  }

  then (successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

// test
function loadImg(src) {
  const promise = new MyPromise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}

let src = 'http://manmanlang.ai4system.com/map.svg'

let result = loadImg(src)
result.then( () => {
  console.log('resolve 1')
}, () => {
  console.log('reject 1')
} )

result.then( () => {
  console.log('resolve 2')
}, () => {
  console.log('reject 2')
} )
