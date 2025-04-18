let numElement = document.getElementById("num");

document.getElementById("inc").onclick = function() {
    let num = numElement.textContent;
    num = Number(num);
    num++;
    numElement.textContent = num;
}
document.getElementById("dec").onclick = function() {
    let num = numElement.textContent;
    num = Number(num);
    num--;
    numElement.textContent = num;
}
document.getElementById("res").onclick = function() {
    numElement.textContent = 0;
}