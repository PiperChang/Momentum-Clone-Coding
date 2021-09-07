const body = document.querySelector("body");
const IMG_NUMBER = 19; //총 이미지 개수
function paintImage(imgNumber){ //Image 배경화면으로 출력
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom(){
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();