//  choice date 
const expectedDate = '24 Dec 2020';

const expectedValue = document.querySelector('.expected-date');
const dayValue = document.querySelector('.day-value');
const hourValue = document.querySelector('.hour-value');
const minutValue = document.querySelector('.minut-value');
const secondValue = document.querySelector('.second-value');

function countTime() {
    const christmasDay = new Date(expectedDate);
    const todayDate = new Date();

    const totalNumberOfSecond = (christmasDay - todayDate) / 1000;
    const days = Math.floor(totalNumberOfSecond / 3600 / 24);
    const hours = Math.floor(totalNumberOfSecond / 3600) % 24;
    const minuts = Math.floor(totalNumberOfSecond / 60) % 60;
    const seconds = Math.floor(totalNumberOfSecond) % 60;

    dayValue.innerHTML = days;
    hourValue.innerHTML = addZero(hours);
    minutValue.innerHTML = addZero(minuts);
    secondValue.innerHTML = addZero(seconds);
    expectedValue.innerHTML = expectedDate;

    setTimeout(countTime, 1000);
}

function addZero(time) {
    return (parseInt(time, 10) < 10 ? "0" : "") + time;
}

function changeBg() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 16) {
        document.body.style.backgroundImage = "url('img/day.jpg')";
    } else {
        document.body.style.backgroundImage = "url('img/night.jpg')";
    }
}

changeBg();
countTime();