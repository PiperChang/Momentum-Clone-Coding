const body = document.querySelector('body')
IMG_NUM = 21
function init() {
  var imgNum = parseInt(Math.random()*100)%IMG_NUM;
  const img = new Image()
  img.src = `./image/${imgNum}.jpg`
  img.classList.add('bgImage')
  body.prepend(img)
}

init()