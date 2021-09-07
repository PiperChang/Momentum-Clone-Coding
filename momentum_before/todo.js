const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input")
toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'todo';
const toDos = [];
const newId = toDos.length + 1;

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function deleteToDo(event) {//버튼 누르면 지워지기
  const deleteBtn = event.target; //
  const deleteLi = deleteBtn.parentNode;
  toDoList.removeChild(deleteLi);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== deleteLi;
  }) //return 문 조건 만족하는 것만 forEach 해라
  //todo 리스트에서 삭제 하기.
  toDos.splice(deleteLi, 1);
  saveToDos();
}

function paintToDo(text)//todo 보여주기
{
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo)
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId + 1;

  const toDoObj = {
    text: text,
    id: newId
  } //todoObj 만들엇음

  toDos.push(toDoObj);

  saveToDos();
}


function handleSubmit(event) {//todo제출하면 리스트에서 보이기
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";

}

function loadToDos() {//toDo list 가져오기
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();

// 만들어야 할 기능 :  todo list local storage에 저장.
// 