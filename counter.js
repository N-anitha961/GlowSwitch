let counterElement = document.getElementById("paraValue");
console.log(counterElement);

function decreaseButton() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) - 1;
    counterElement.textContent = updateValue;
    if (updateValue < 0) {
        counterElement.style.color = "red";
    } else if (updateValue > 0) {
        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "Black";
    }
}

function increaseButton() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) + 1;
    counterElement.textContent = updateValue;
    if (updateValue < 0) {
        counterElement.style.color = "red";
    } else if (updateValue > 0) {
        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "Black";
    }
}

function resetButton() {
    let updateValue = 0;
    counterElement.textContent = updateValue;
    counterElement.style.color = "Black";
}