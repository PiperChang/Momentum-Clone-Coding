const form = document.querySelector(".js-form"),
    input  = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
    form.classList.remove(SHOWING_CN);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){    
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function printGreeting(text){
    greeting.classList.remove(SHOWING_CN); //여기 왜 필요? 
    greeting.classList.add(SHOWING_CN); 
    greeting.innerText = `😘힘내자 ${text}😎`
}


//인사하기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
         askForName();
    }
    else
    {
        printGreeting(currentUser );
    }
}


loadName();