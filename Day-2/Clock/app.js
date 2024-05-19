const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalSecondHand = document.querySelector('.digital-second-hand');
const digitalMinuteHand = document.querySelector('.digital-min-hand');
const digitalHourHand = document.querySelector('.digital-hour-hand');
const meridiem = document.querySelector('.digital-meridian');

// setting time
function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    const minutes = now.getMinutes();
    const minuteDegree = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    const hour = now.getHours();
    const hourDegree = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    // smooth transition
    if(secondDegree === 90) {
        secondHand.style.transition = "all 0s"
    } else {
        secondHand.style.transition = "all 0.5s"
    }
    if(minuteDegree === 90) {
        minuteHand.style.transition = "all 0s"
    } else {
        minuteHand.style.transition = "all 0.1s"
    }
    // digital watch
    digitalSecondHand.innerText = seconds;
    digitalMinuteHand.innerText = minutes;
    digitalHourHand.innerText = hour;
    // pm and am meridian
    if(hour >= 12) {
        meridiem.innerText = 'PM';
    } else {
        meridiem.innerText = 'AM';
    }
}
setInterval(setTime,1000);