const weatherDiv = document.querySelector('.js-weather');

const positionKey = 'position';
const API_KEY = "26d178f9ee395f5559ecb2dc9266533f";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    }).then(function(data) {
        weatherDiv.innerHTML = `${data.name} @ ${data.main.temp}`
    });
}

function paintWeather(pos) {
    const lat = pos.latitude;
    const lng = pos.longitude;
    getWeather(lat, lng);
}

function successPosition(pos) {
    
    const postionObj = {
        'latitude': pos.coords.latitude,
        'longitude': pos.coords.longitude,
    }
    localStorage.setItem(positionKey, JSON.stringify(postionObj));
    paintWeather(postionObj);
}

function failPosition(err) {
    console.log(err);
}

function CurrnetPosition() {
    navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}

function init() {
    const pos = localStorage.getItem(positionKey);
    if (pos === null) {
        CurrnetPosition();
    } else {
        paintWeather(JSON.parse(pos));
    }
}

init();
