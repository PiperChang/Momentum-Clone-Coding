const greeting = document.querySelector('.js-greeting')
const greetingForm = document.querySelector('.js-greeting-form')
const greetingInput = document.querySelector('.js-greeting-input')


function hadleGreetingSubmit(e) {
  e.preventDefault()
  saveName(greetingInput.value)
  printName(window.localStorage.userName)
}

function printName(userName){
//  greeting.classList.remove("userWaiting")
//  greeting.classList.add("userLogin")
  greeting.innerHTML = `<h1>Welcome, ${userName}</h1>`
}

function saveName(userName) {
  myStorage = window.localStorage;
  myStorage.setItem("userName",userName);  
}

function init() {
  if (window.localStorage.userName){
    var userName = window.localStorage.userName
    printName(userName)
  }
  else {
    greetingForm.addEventListener("submit",hadleGreetingSubmit);
//    greeting.classList.add("userWaiting")
  }
}

init()