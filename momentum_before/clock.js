const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    clockTitle.innerText = `${hour<10 ? `0${hour}`: hour}:${min < 10? `0${min}`: min}:${sec<10? `0${sec}`:sec}`;
}


function init(){
    getTime();
    setInterval(getTime,1000 )
}
init();
    //to do here : make a clock 