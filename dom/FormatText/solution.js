function solve() {
    let inputElement = document.getElementById('input').value.trim();
    let outputElement = document.getElementById('output');

    let splitted = inputElement.split('.');

    for (let i = 0; i < splitted.length; i++) {
        let pElement = document.createElement('p');

        let threeSentences = splitted.splice(0, 3);
        for (let j = 0; j < threeSentences.length; j++) {
            if (threeSentences[j].trim() !== '') {
                pElement.textContent += threeSentences[j] + '. ';
            }
        }

        outputElement.appendChild(pElement);
    }
}
