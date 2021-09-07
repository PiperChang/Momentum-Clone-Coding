const toDoList = document.querySelector('.js-toDoList')
const toDoForm = document.querySelector('.js-toDoForm')
const toDoInput = document.querySelector('.toDoInput')
TODOS = []
function init(){
  loadToDos()
  TODOS.forEach(todo => {
    addToDo(todo.text, todo.done)
  });
}

//어려웠던건... TODOS
//안되던 거 HOVER 했을때, 가상 셀렉터 
//한달 동안 잘 몰랐던 거는 .. json, 비동기화 문제도 아직 이해 잘 이해를 못한것 같아 아쉽구요



//이해가 잘 안되었던 부분 : 안떠올라...console 창에서 편하게 치는 방법?
//한 내용 : WEATHER 추가했음
//transition 안해봤음, github 으로 site 올리는거 까먹음...
// 어려웠던 점: 각 fuction을 최소 기능으로 작게 만들고, 재사용하는 것이 편하다.
// 예를 들어서, printToDo 에 
//Heroku 
//CORS 설정하는 방법 : NODE JS Header에 넣어야 한다..???
//기능이 길어지니깐, 새로운 기능을 
//저번주에는 localStorage 

//DOM 이 뭐냐 ..?
//Selector를 

function saveToDos() { // localStorage를 현재 TODOS로 바꾸기
  localStorage.setItem('toDo', JSON.stringify(TODOS))
}

function loadToDos() { //현재 TODOS를 localStorage로 바꾸기 > 바뀐 todo 실제로 불러오는건 별개 init()에 추가해야할듯
  const loadedToDos = localStorage.getItem('toDo')
  if (loadedToDos !== null) {
    const parsedToDo = JSON.parse(loadedToDos) //안되면, foreach 로 TODO에 하나씩 PUSH
    parsedToDo.forEach(function (todo) {
      TODOS.push(todo)
    });
  }
}

function addToDo(text, done = "") { //todo를 보이게만 하라.
  const li = document.createElement("li");
  const span = document.createElement("span")
  span.classList.add('toDo')
  span.innerText = text
  li.appendChild(span) // li 하위에 Text 삽입
  addDelButton(li) //li 하위에 DelButton 추가함
  if (done){
    span.classList.toggle('done')
  } 
  toDoList.appendChild(li) //Html 상에 li 추가함으로써, 출력
 
  span.addEventListener("click",handleClick)
}


function handleClick(e){
  if (e.target.classList.contains('toDo')) {
    e.target.classList.toggle('done');
  }
  const tg = TODOS.find(function (todo) { // TODO에서 done 표시할 타겟 찾기.
    if (todo.text === e.target.innerText)
      return true
  })
  
  if(tg.done === "")
    tg.done = "done"
  else
    tg.done = ""
  saveToDos()
}


// 질문 : event 일어날 때, 그 이벤트 
function addDelButton(newToDo) {
  var delBtn = document.createElement('button')
  delBtn.classList.add('delButton')
  delBtn.innerText = "❌"
  newToDo.appendChild(delBtn)
  delBtn.addEventListener("click", delToDo)
}

//toDo 삭제 
function delToDo(e) {
  if (e.target.classList.contains("delButton")) {
    e.target.parentNode.remove();
  }
  const delBtn = e.target
  const delLi = delBtn.parentNode;
  TODOS = TODOS.filter(function (todo) {
     return todo.text !== delLi.firstChild.innerText
  }) //타겟의 text와 동일한 text 가진 애들
//  TODOS.
  saveToDos()
}

//새 ToDo 추가
function handleToDoSubmit(e) {
  e.preventDefault()
  text = toDoInput.value
  addToDo(text) // 제출한 TODO를 보이게 한다.
  toDoInput.value = ""
  TODOS.push({text:text, done:""}) //TODOS에 담고, LocalStorage에 저장한다.
  saveToDos()
}
toDoForm.addEventListener("submit", handleToDoSubmit)

init()


/*
 if (e.target.classList.contains('span')) {
  e.target.span.classList.toggle('done');
  const tg = TODOS.find(function (todo) { // TODO에서 done 표시할 타겟 찾기.
    if (todo.text === e.target.text)
      return true
  })
  if (todo.done == "")
    todo.done = "done"
  else
    todo.done = "" //Done 추가/삭제 하기
}
saveToDos()


newToDo.addEventListener("click", function (e) { //newToDo 클릭시 표시
  if (e.target.classList.contains('toDo')) {
    e.target.classList.toggle('done');







 
  const toDoObj = { // LocalStorage에 저장
    text: text,
    done: done,
  }
  TODOS.push(toDoObj)
}

/*
function handleCheck(e) {
  if (e.target.classList.contains('span')) {
    e.target.span.classList.toggle('done');
    const tg = TODOS.find(function (todo) { // TODO에서 done 표시할 타겟 찾기.
      if (todo.text === e.target.text)
        return true
    })
    if (todo.done == "")
      todo.done = "done"
    else
      todo.done = "" //Done 추가/삭제 하기
  }
  saveToDos()
}

*/

//%** 현재는, 입력하면 그 때에만 저장되는 상태임 . localS에 저장된 todo 내용을 가져오도록 해야함 
/*

function printToDo(text) { //새 toDo 들어오면, 새 것 출력하기.
  const li = document.createElement("li");
  const span = document.createElement("span")
  span.innerText = text
  li.appendChild(span) // li 하위에 Text 삽입
  addDelButton(li) //li 하위에 DelButton 추가함
  toDoList.appendChild(li) //Html 상에 li 추가함으로써, 출력


  //원래 TODOS에 있으면.. ?? **************
  const toDoObj = { // LocalStorage에 저장
    text: text,
    done: "",
    //    num : `${}`
  }
  TODOS.push(toDoObj)
  saveToDos()
}

//Parse 한 애의 toggle 상태 확인
function loadedToDos() {
  const loadedToDos = localStorage.getItem(TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    parsedToDos.forEach(element => {
      paintToDo(element.text)
      if ()

    });
  }
}




/*
function generateToDo(text) {
  var newToDo = document.createElement('li')  //새로운 ToDo 생성
  newToDo.classList.add('toDo')
  newToDo.innerText = text
  toDoList.appendChild(newToDo) // newToDo 표시하기

  newToDo.addEventListener("click", function (e) { //newToDo 클릭시 표시
    if (e.target.classList.contains('toDo')) {
      e.target.classList.toggle('done');
    }
  });
  addDelButton(newToDo)  // 삭제 버튼 추가하기
}
*/


//toDoList.addEventListener('click',del하는 fuction)*/