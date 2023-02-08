const seconHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDegres = ((second / 60) * 360) + 90;
    seconHand.style.transform = `rotate(${secondDegres}deg)`;
    console.log(second);

    const min = now.getMinutes();
    const minDegres = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegres}deg)`;
    console.log(min);

    const hour = now.getHours();
    const hourDegres = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegres}deg)`;
    console.log(hour);
}
setInterval(setDate, 1000);