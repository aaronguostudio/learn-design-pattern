function loadImg (src) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('Img loaded failed')
    }
    img.src = src
  })
}

export default loadImg
