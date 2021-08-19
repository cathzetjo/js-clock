const optionsForTime = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const optionsForTimeOther = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
};
const optionsForDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};
const optionsForDateOther = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};

function setTimeLocalClock() {
    const hoursArrow = document.querySelector('.arrow-hours');
    const minutesArrow = document.querySelector('.arrow-minutes');
    const secondsArrow = document.querySelector('.arrow-seconds');
    const currentDate = new Date();
    const timeParagraph = document.querySelector('.time-local');
    const dateParagraph = document.querySelector('.date-local');
    moveArrows(currentDate, hoursArrow, minutesArrow, secondsArrow);
    getDateToPrint(currentDate, timeParagraph, dateParagraph, optionsForTime, optionsForDate);
}

function setTimeCityLeftClock() {
    const hoursArrowCityLeft = document.querySelector('.arrow-hours-cityLeft');
    const minutesArrowCityLeft = document.querySelector('.arrow-minutes-cityLeft');
    const currentDateCityLeftString = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
    const currentDateCityLeft = new Date(currentDateCityLeftString);
    const timeParagraphCityLeft = document.querySelector('.time-cityLeft');
    const dateParagraphCityLeft = document.querySelector('.date-cityLeft');
    moveArrows(currentDateCityLeft, hoursArrowCityLeft, minutesArrowCityLeft);
    getDateToPrint(currentDateCityLeft, timeParagraphCityLeft, dateParagraphCityLeft, optionsForTimeOther, optionsForDateOther);
}

function setTimeCityRightClock() {
    const hoursArrowCityRight = document.querySelector('.arrow-hours-cityRight');
    const minutesArrowCityRight = document.querySelector('.arrow-minutes-cityRight');
    const currentDateCityRightString = new Date().toLocaleString('en-US', {timeZone: 'Asia/Tokyo'});
    const currentDateCityRight = new Date(currentDateCityRightString);
    const timeParagraphCityRight = document.querySelector('.time-cityRight');
    const dateParagraphCityRight = document.querySelector('.date-cityRight');
    moveArrows(currentDateCityRight, hoursArrowCityRight, minutesArrowCityRight);
    getDateToPrint(currentDateCityRight, timeParagraphCityRight, dateParagraphCityRight, optionsForTimeOther, optionsForDateOther);
}

setInterval(function () {
    setTimeLocalClock();
    setTimeCityLeftClock();
    setTimeCityRightClock();
}, 1000);

function moveArrows(currentDate, hoursArrowDiv, minutesArrowDiv, secondsArrowDiv) {
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const minutesToDegrees = (minutes / 60 * 360) + 90;
    const hoursToDegrees = (hours / 12 * 360) + 90;
    minutesArrowDiv.style.transform = `rotate(${minutesToDegrees}deg)`;
    hoursArrowDiv.style.transform = `rotate(${hoursToDegrees}deg)`;
    if (secondsArrowDiv) {
        const seconds = currentDate.getSeconds();
        const secondsToDegrees = (seconds / 60 * 360) + 90;
        secondsArrowDiv.style.transform = `rotate(${secondsToDegrees}deg)`;
    }
}

function getDateToPrint(currentDate, timeParagraph, dateParagraph, optionsForTime, optionsForDate) {
    const time = currentDate.toLocaleString("en-US", optionsForTime);
    const date = currentDate.toLocaleString("en-US", optionsForDate);
    timeParagraph.innerHTML = time;
    dateParagraph.innerHTML = date;
}

let switcher = 0;

function changeTheme() {
    const allElements = document.documentElement;
    if (!switcher) {
        allElements.setAttribute('data-theme', 'light');
        switcher = 1;
    } else {
        allElements.setAttribute('data-theme', 'dark');
        switcher = 0;
    }
}


