const number = document.getElementById("num");
const imagesDiv = document.getElementsByClassName("images");

function rollDice() {
    let random;
    let images = [];
    for (let i = 0; i < Number(number.value); i++) {
        random = Math.floor(Math.random() * 6) + 1;
        images.push(`<img src="dice_images/${random}.png">`);
    }
    imagesDiv[0].innerHTML = images.join('');
}