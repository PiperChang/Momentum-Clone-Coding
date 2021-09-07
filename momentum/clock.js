const clockContainer = document.getElementById('js-clock')
const clockText = clockContainer.querySelector("h1")


function clockWork() {
  const date = new Date;
  var hours = date.getHours(); var minutes = date.getMinutes(); var seconds = date.getSeconds();
  if (hours < 10)
    hours = `0${hour}`
  if (minutes < 10)
    minutes = `0${minutes}`
  if (seconds < 10)
    seconds = `0${seconds}`

  clockText.innerText = `${hours}:${minutes}:${seconds}`

}

function init() {
clockWork();
  setInterval(clockWork, 1000)
}

init();
