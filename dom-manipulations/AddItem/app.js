function addItem() {
    let inputElement = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement;
    items.appendChild(newElement);
}