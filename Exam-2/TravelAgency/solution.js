window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');

  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let ulElement = document.getElementById('infoPreview');
  let blockElement = document.getElementById('block');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  
  submitBtn.addEventListener('click', () => {
    if(fullNameElement.value !== '' && emailElement.value !== '') {
      fullNameBackup = fullNameElement.value;
      emailBackup = emailElement.value;
      phoneNumberBackup = phoneNumberElement.value;
      addressBackup = addressElement.value;
      codeBackup = codeElement.value;

      for(let i = 0; i < labelValues.length; i++) {
        let currentData = '';
        currentData = `${labelValues[i].innerText} ${inputValues[i].value}`;
        let newLiElement = document.createElement('li');
        newLiElement.textContent = currentData;
        ulElement.appendChild(newLiElement);
      }
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
  
      fullNameElement.value = '';
      emailElement.value = '';
      phoneNumberElement.value = '';
      addressElement.value = '';
      codeElement.value = '';
    }
  });

  editBtn.addEventListener('click', () => {
    let listItems = Array.from(ulElement.childNodes);
    for(let i = 0; i < listItems.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });

  continueBtn.addEventListener('click', () => {
    blockElement.textContent = '';
    let headingEl = document.createElement('h3');
    headingEl.textContent = 'Thank You For Your Reservation!';
    blockElement.appendChild(headingEl);
  });
}