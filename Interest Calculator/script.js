const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const days = document.getElementById("days");
const error = document.getElementById("error");
const total = document.getElementById("total");

function calculate() {
    if ((amount.value === "") || (rate.value === "") || (days.value === "") || (isNaN(Number(amount.value))) || (isNaN(Number(days.value))) || (isNaN(Number(rate.value))) || (amount.value < 0) || (days.value < 0) || (rate.value < 0)) {
        error.innerText = "Please only input numbers > 0!";
    } else {
        let result = Number(amount.value) + (Number(amount.value) * (Number(rate.value) / 100)) * (Number(days.value) / 365);
        result = result.toLocaleString("ar-MA", {style: "currency", currency: "MAD"});
        total.innerText = result;
    }
}