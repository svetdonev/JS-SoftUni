function toggle() {
    let extraTextElement = document.getElementById('extra');
    let button = document.querySelector('.button');

    if(button.textContent == 'More') {
        button.textContent = 'Less';
        extraTextElement.style.display = 'block';
    } else {
        button.textContent = 'More';
        extraTextElement.style.display = 'none';
    }
}