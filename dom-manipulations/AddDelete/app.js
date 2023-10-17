function addItem() {
    let inputField = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputField;

    inputField.value = ' ';

    let aElement = document.createElement('a');
    aElement.setAttribute('href', '#');
    aElement.textContent = '[Delete]';

    aElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(aElement);
    items.appendChild(liElement);
}