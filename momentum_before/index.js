console.log('Im Working. Im JS. Im Beautiful');
/*
function sayHello(username){ 
    console.log(`${username}님, 환영합니다.`); // string을 일일히 +안하고 표현하는 법
}
*/

const title = document.querySelector("#title");


const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass =title.className
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS 
    }
    console.  
    title.style.color = "red";
}
title.addEventListener("click", handleClick) 