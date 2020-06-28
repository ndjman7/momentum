const form = document.querySelector('.js-greeting-form'),
    input = form.querySelector('input'),
    div = document.querySelector('.js-greeting');

const currentUserKey = 'currentUser';
const displayNoneClass = 'display-none';

function printCurrentUser(name) {
    form.classList.add(displayNoneClass);
    div.innerText = `Hi ${name}`;
}
function handleSubmit(event) {
    event.preventDefault();
    const currentUser = input.value;
    localStorage.setItem(currentUserKey, currentUser);
    printCurrentUser(currentUser);
}

function init() {
    const currentUser = localStorage.getItem(currentUserKey);
    if (currentUser === null) {
        form.addEventListener('submit', handleSubmit);
    } else {
        printCurrentUser(currentUser);
    }
}

init();