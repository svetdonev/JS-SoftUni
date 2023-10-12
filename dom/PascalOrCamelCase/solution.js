function solve() {
    let textElement = document.getElementById('text').value;
    let conventionElement = document.getElementById('naming-convention').value;
    let resultElement = document.getElementById('result');

    let textResult = '';

    if (conventionElement == 'Pascal Case') {
        for (let i = 0; i < textElement.length; i++) {
            if (textElement[i] == ' ') {
                textResult += textElement[i + 1].toUpperCase();
                i++;
            } else {
                if (i == 0) {
                    textResult += textElement[i].toUpperCase();
                } else {
                    textResult += textElement[i].toLowerCase();
                }
            }
        }

        resultElement.textContent = textResult;

    } else if (conventionElement == 'Camel Case') {
        for (let i = 0; i < textElement.length; i++) {
            if (textElement[i] == ' ') {
                textResult += textElement[i + 1].toUpperCase();
                i++;
            } else {
                textResult += textElement[i].toLowerCase();
            }
        }

        resultElement.textContent = textResult;
    } else {
        resultElement.textContent = 'Error!';
    }
}