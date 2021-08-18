function setTime() {
    const secondsArrow = document.querySelector('.arrow-seconds');
    const minutesArrow = document.querySelector('.arrow-minutes');
    const hoursArrow = document.querySelector('.arrow-hours');
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const secondsToDegrees = (seconds / 60 * 360)+90;
    const minutesToDegrees = (minutes / 60 * 360)+90;
    const hoursToDegrees = (hours / 12 * 360)+90;
    secondsArrow.style.transform = `rotate(${secondsToDegrees}deg)`;
    minutesArrow.style.transform = `rotate(${minutesToDegrees}deg)`;
    hoursArrow.style.transform = `rotate(${hoursToDegrees}deg)`;

    const timeParagraph = document.querySelector('.time');
    const dateParagraph = document.querySelector('.date');
    const optionsForTime = {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const optionsForDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };
    const time = currentDate.toLocaleString("en-US", optionsForTime);
    const date = currentDate.toLocaleString("en-US", optionsForDate);
    timeParagraph.innerHTML=time;
    dateParagraph.innerHTML=date;
}

setInterval(setTime, 1000);

let switcher = 0;

function changeTheme() {
    const backgroundPicture = document.querySelector('body');
    const mainCircle = document.querySelector('main');
    const numbers = document.querySelector('.numbers');
    const circle = document.querySelector('.circle');
    const arrowHours = document.querySelector('.arrow-hours');
    const arrowMinutes = document.querySelector('.arrow-minutes');
    const timeAndDate = document.querySelector('.time-and-date');
    if (!switcher) {
        switcher=1;
        backgroundPicture.style.backgroundImage='url("./assets/img/background_light.jpg")';
        mainCircle.style.borderColor='rgb(0, 0, 0)';
        numbers.style.color='rgb(0, 0, 0)';
        circle.style.backgroundColor='rgb(0, 0, 0)';
        arrowHours.style.background='linear-gradient(to right, #000 50%, transparent 50%)';
        arrowMinutes.style.background='linear-gradient(to right, #000 50%, transparent 50%)';
        timeAndDate.style.color='rgb(0, 0, 0)';
    }
    else {
        switcher=0;
        backgroundPicture.style.backgroundImage='url("./assets/img/background_dark.jpg")';
        mainCircle.style.borderColor='rgb(238, 238, 238)';
        numbers.style.color='rgb(238, 238, 238)';
        circle.style.backgroundColor='rgb(238, 238, 238)';
        arrowHours.style.background='linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        arrowMinutes.style.background='linear-gradient(to right, rgb(238, 238, 238) 50%, transparent 50%)';
        timeAndDate.style.color='rgb(238, 238, 238)';
    }
}


