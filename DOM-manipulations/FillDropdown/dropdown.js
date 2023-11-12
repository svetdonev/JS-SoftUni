function addItem() {
    let itemInputText = document.getElementById('newItemText');
    let itemInputValue = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = itemInputText.value;
    optionElement.value = itemInputValue.value;

    if (itemInputText.value !== '' && itemInputValue.value !== '') {
        menuElement.appendChild(optionElement);
    }
    
    itemInputText.value = '';
    itemInputValue.value = '';
}