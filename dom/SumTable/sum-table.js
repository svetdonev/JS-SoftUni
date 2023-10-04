function sumTable() {
    let priceElements = document.querySelectorAll('td:nth-child(even)');

    let sum = 0;
    for (let i = 0; i < priceElements.length - 1; i++) {
        let currentNumber = Number(priceElements[i].textContent);
        sum += currentNumber;
    }

    let result = document.getElementById('sum');
    result.textContent = sum;
}