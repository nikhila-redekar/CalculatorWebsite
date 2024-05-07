window.onload = init;

function init() {
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
}

function onAddBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);

    let number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);

    let result = number1 + number2;

    let answerField = document.getElementById("answerField");
    answerField.value = result;
}

function onSubtractBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);

    let number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);

    let result = number1 - number2;

    let answerField = document.getElementById("answerField");
    answerField.value = result;
}

function onMultiplyBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);

    let number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);

    let result = number1 * number2;

    let answerField = document.getElementById("answerField");
    answerField.value = result;
}

function onDivideBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);

    let number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);

    if (number2 === 0) {
        alert("Cannot divide by zero!");
        return;
    }

    let result = number1 / number2;

    let answerField = document.getElementById("answerField");
    answerField.value = result;
}
