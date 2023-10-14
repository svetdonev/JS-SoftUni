function deleteByEmail() {
    let data = document.querySelectorAll('tbody tr td:nth-child(even)');
    let resultElement = document.getElementById('result');
    let inputElement = document.querySelector('input[type=text]').value;
    
    for (const email of data) {
        if(email.textContent == inputElement) {
            email.parentNode.remove();
            resultElement.textContent = 'Deleted.'
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}