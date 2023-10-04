function extractText() {
    let listElements = document.querySelectorAll('#items');
    let resultElement = document.getElementById('result');

    for (const el of listElements) {
        resultElement.textContent += el.textContent;
    }
}