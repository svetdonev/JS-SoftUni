function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');

    let firstNumber = Number(firstNumElement.value);
    let secondNumber = Number(secondNumElement.value);

    let resultElement = document.getElementById('result');

    resultElement.textContent = firstNumber - secondNumber;
}