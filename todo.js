const toDosForm = document.querySelector('.js-todo-form'),
    toDoInput = toDosForm.querySelector('input'),
    toDosDiv = document.querySelector('.js-todos');

const toDosKey = 'toDos';

function handleBtnClick(event) {
    event.preventDefault();
    const btn = event.target;
    const index = btn.value;
    const li = btn.parentNode;
    li.remove();
    let toDos = JSON.parse(localStorage.getItem(toDosKey));
    if (index > -1) toDos.splice(index, 1);
    localStorage.setItem(toDosKey, JSON.stringify(toDos));
}

function paintToDo(toDo, index){
    li = document.createElement('li');
    ul.appendChild(li);
    btn = document.createElement('button');
    btn.innerText = 'X';
    btn.value = index;
    btn.addEventListener('click', handleBtnClick);
    span = document.createElement('span');
    span.innerText = toDo;
    li.appendChild(btn);
    li.appendChild(span);
}

function paintToDos(toDos) {
    ul = document.createElement('ul');
    toDosDiv.appendChild(ul);
    toDos.forEach(paintToDo);
}

function handleSubmit(evnet) {
    evnet.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = '';
    let toDos = localStorage.getItem(toDosKey);
    if (toDos === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(toDos);
    }
    toDos.push(toDo);
    localStorage.setItem(toDosKey, JSON.stringify(toDos));
    paintToDo(toDo);
}

toDosForm.addEventListener('submit', handleSubmit);

function init() {
    const toDos = JSON.parse(localStorage.getItem(toDosKey));
    if (toDos !== null) {
        paintToDos(toDos);
    }
}

init();