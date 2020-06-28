const body = document.querySelector('body');

const ImageNumber = 2;

function getRandomNumber() {
    return Math.ceil(Math.random() * ImageNumber);
}

function init() {
    const randomNumber = getRandomNumber();
    body.style.backgroundImage = `url('images/${randomNumber}.jpg')`;
    body.style.height = 'auto';
    body.style.width = '100%';
}

init();