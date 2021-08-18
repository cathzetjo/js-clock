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
    const secondsArrow = document.querySelector('.arrow-seconds');
    const minutesArrow = document.querySelector('.arrow-minutes');
    const hoursArrow = document.querySelector('.arrow-hours');
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const secondsToDegrees = (seconds / 60 * 360) + 90;
    const minutesToDegrees = (minutes / 60 * 360) + 90;
    const hoursToDegrees = (hours / 12 * 360) + 90;
    secondsArrow.style.transform = `rotate(${secondsToDegrees}deg)`;
    minutesArrow.style.transform = `rotate(${minutesToDegrees}deg)`;
    hoursArrow.style.transform = `rotate(${hoursToDegrees}deg)`;

    const timeParagraph = document.querySelector('.time-local');
    const dateParagraph = document.querySelector('.date-local');
    const time = currentDate.toLocaleString("en-US", optionsForTime);
    const date = currentDate.toLocaleString("en-US", optionsForDate);
    timeParagraph.innerHTML = time;
    dateParagraph.innerHTML = date;
}

setInterval(setTimeLocalClock, 1000);

function setTimeCity1Clock() {
    const minutesArrowCity1 = document.querySelector('.arrow-minutes-city1');
    const hoursArrowCity1 = document.querySelector('.arrow-hours-city1');
    const currentDateCity1String = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
    const currentDateCity1 = new Date(currentDateCity1String);
    const minutesCity1 = currentDateCity1.getMinutes();
    const hoursCity1 = currentDateCity1.getHours();
    const minutesToDegreesCity1 = (minutesCity1 / 60 * 360) + 90;
    const hoursToDegreesCity1 = (hoursCity1 / 12 * 360) + 90;
    minutesArrowCity1.style.transform = `rotate(${minutesToDegreesCity1}deg)`;
    hoursArrowCity1.style.transform = `rotate(${hoursToDegreesCity1}deg)`;

    const timeParagraphCity1 = document.querySelector('.time-city1');
    const dateParagraphCity1 = document.querySelector('.date-city1');
    const time = currentDateCity1.toLocaleString("en-US", optionsForTimeOther);
    const date = currentDateCity1.toLocaleString("en-US", optionsForDateOther);
    timeParagraphCity1.innerHTML = time;
    dateParagraphCity1.innerHTML = date;
}

setInterval(setTimeCity1Clock, 1000);

function setTimeCity2Clock() {
    const minutesArrowCity2 = document.querySelector('.arrow-minutes-city2');
    const hoursArrowCity2 = document.querySelector('.arrow-hours-city2');
    const currentDateCity2String = new Date().toLocaleString('en-US', {timeZone: 'Asia/Tokyo'});
    const currentDateCity2 = new Date(currentDateCity2String);
    const minutesCity2 = currentDateCity2.getMinutes();
    const hoursCity2 = currentDateCity2.getHours();
    const minutesToDegreesCity2 = (minutesCity2 / 60 * 360) + 90;
    const hoursToDegreesCity2 = (hoursCity2 / 12 * 360) + 90;
    minutesArrowCity2.style.transform = `rotate(${minutesToDegreesCity2}deg)`;
    hoursArrowCity2.style.transform = `rotate(${hoursToDegreesCity2}deg)`;

    const timeParagraphCity2 = document.querySelector('.time-city2');
    const dateParagraphCity2 = document.querySelector('.date-city2');
    const time = currentDateCity2.toLocaleString("en-US", optionsForTimeOther);
    const date = currentDateCity2.toLocaleString("en-US", optionsForDateOther);
    timeParagraphCity2.innerHTML = time;
    dateParagraphCity2.innerHTML = date;
}

setInterval(setTimeCity2Clock, 1000);

let switcher = 0;

function changeTheme() {
    const backgroundPicture = document.querySelector('body');

    const cityNameLocal = document.querySelector('.local h2');
    const mainCircle = document.querySelector('.local-clock');
    const numbers = document.querySelector('.numbers');
    const circle = document.querySelector('.circle');
    const arrowHours = document.querySelector('.arrow-hours');
    const arrowMinutes = document.querySelector('.arrow-minutes');
    const timeAndDate = document.querySelector('.time-and-date-local');

    const cityNameCity1 = document.querySelector('.city1 h2');
    const mainCircleCity1 = document.querySelector('.city1-clock');
    const numbersCity1 = document.querySelector('.numbers-city1');
    const circleCity1 = document.querySelector('.circle-city1');
    const arrowHoursCity1 = document.querySelector('.arrow-hours-city1');
    const arrowMinutesCity1 = document.querySelector('.arrow-minutes-city1');
    const timeAndDateCity1 = document.querySelector('.time-and-date-city1');

    const cityNameCity2 = document.querySelector('.city2 h2');
    const mainCircleCity2 = document.querySelector('.city2-clock');
    const numbersCity2 = document.querySelector('.numbers-city2');
    const circleCity2 = document.querySelector('.circle-city2');
    const arrowHoursCity2 = document.querySelector('.arrow-hours-city2');
    const arrowMinutesCity2 = document.querySelector('.arrow-minutes-city2');
    const timeAndDateCity2 = document.querySelector('.time-and-date-city2');

    if (!switcher) {
        switcher = 1;
        backgroundPicture.style.backgroundImage = 'url("./assets/img/background_light.jpg")';

        mainCircle.style.borderColor = 'rgb(0, 0, 0)';
        numbers.style.color = 'rgb(0, 0, 0)';
        circle.style.backgroundColor = 'rgb(0, 0, 0)';
        arrowHours.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        arrowMinutes.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        timeAndDate.style.color = 'rgb(0, 0, 0)';
        cityNameLocal.style.color = 'rgb(0, 0, 0)';

        mainCircleCity1.style.borderColor = 'rgb(0, 0, 0)';
        numbersCity1.style.color = 'rgb(0, 0, 0)';
        circleCity1.style.backgroundColor = 'rgb(0, 0, 0)';
        arrowHoursCity1.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        arrowMinutesCity1.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        timeAndDateCity1.style.color = 'rgb(0, 0, 0)';
        cityNameCity1.style.color = 'rgb(0, 0, 0)';

        mainCircleCity2.style.borderColor = 'rgb(0, 0, 0)';
        numbersCity2.style.color = 'rgb(0, 0, 0)';
        circleCity2.style.backgroundColor = 'rgb(0, 0, 0)';
        arrowHoursCity2.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        arrowMinutesCity2.style.background = 'linear-gradient(to right, #000 50%, transparent 50%)';
        timeAndDateCity2.style.color = 'rgb(0, 0, 0)';
        cityNameCity2.style.color = 'rgb(0, 0, 0)';

    } else {
        switcher = 0;
        backgroundPicture.style.backgroundImage = 'url("./assets/img/background_dark.jpg")';

        mainCircle.style.borderColor = 'rgb(238, 238, 238)';
        numbers.style.color = 'rgb(238, 238, 238)';
        circle.style.backgroundColor = 'rgb(238, 238, 238)';
        arrowHours.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        arrowMinutes.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        timeAndDate.style.color = 'rgb(238, 238, 238)';
        cityNameLocal.style.color = 'rgb(238, 238, 238)';

        mainCircleCity1.style.borderColor = 'rgb(238, 238, 238)';
        numbersCity1.style.color = 'rgb(238, 238, 238)';
        circleCity1.style.backgroundColor = 'rgb(238, 238, 238)';
        arrowHoursCity1.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        arrowMinutesCity1.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        timeAndDateCity1.style.color = 'rgb(238, 238, 238)';
        cityNameCity1.style.color = 'rgb(238, 238, 238)';

        mainCircleCity2.style.borderColor = 'rgb(238, 238, 238)';
        numbersCity2.style.color = 'rgb(238, 238, 238)';
        circleCity2.style.backgroundColor = 'rgb(238, 238, 238)';
        arrowHoursCity2.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        arrowMinutesCity2.style.background = 'linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        timeAndDateCity2.style.color = 'rgb(238, 238, 238)';
        cityNameCity2.style.color = 'rgb(238, 238, 238)';

    }
}


