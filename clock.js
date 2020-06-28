clock = document.querySelector('.js-clock');

function getClock() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const displayHours = hours < 10? `0${hours}` : `${hours}`;
    const minutes = currentDate.getMinutes();
    const displayMinutes = minutes < 10? `0${minutes}` : `${minutes}`;
    const seconds = currentDate.getSeconds();
    const displaySeconds = seconds < 10? `0${seconds}` : `${seconds}`;
    clock.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function init() {
    getClock();
    setInterval(getClock, 1000);
}

init();