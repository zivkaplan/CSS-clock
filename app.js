const $clockArms = {
    seconds: document.querySelectorAll('.arm')[0],
    minutes: document.querySelectorAll('.arm')[1],
    hours: document.querySelectorAll('.arm')[2],
};

function updateClock() {
    const now = new Date();
    $clockArms.hours.style.transform = `rotate(${now.getHours() * 30}deg)`;
    $clockArms.minutes.style.transform = `rotate(${now.getMinutes() * 6}deg)`;
    $clockArms.seconds.style.transform = `rotate(${now.getSeconds() * 6}deg)`;
}

window.addEventListener('load', updateClock);

setInterval(updateClock, 1000);
