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
}

setInterval(setTime, 1000);


