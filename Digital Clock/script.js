const clock = document.getElementById("clock");
let date;
let str;
let suffix;

function liveClock() {
    setTimeout(() => {
        date = new Date();
        suffix = date.getHours() >= 12 ? "PM" : "AM";
        str = String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0') + " " + suffix;
        clock.innerText = str;
        liveClock();
    }, 1000)
}
liveClock();