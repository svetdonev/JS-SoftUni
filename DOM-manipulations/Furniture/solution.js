function solve() {
  let generateButton = document.getElementsByTagName('button')[0];
  let buyButton = document.getElementsByTagName('button')[1];

  let tableBody = document.querySelector('tbody');
  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    let textArea = document.querySelector('textarea').value;

    let parsedArray = JSON.parse(textArea);

    for (const current of parsedArray) {
      let trElement = document.createElement('tr');

      let tdImgElement = document.createElement('td');
      let tdNameElement = document.createElement('td');
      let tdPriceElement = document.createElement('td');
      let tdFactorElement = document.createElement('td');
      let tdMarkElement = document.createElement('td');

      trElement.appendChild(tdImgElement);
      trElement.appendChild(tdNameElement);
      trElement.appendChild(tdPriceElement);
      trElement.appendChild(tdFactorElement);
      trElement.appendChild(tdMarkElement);


      let imgElement = document.createElement('img');
      imgElement.src = current.img;
      tdImgElement.appendChild(imgElement);

      tdNameElement.textContent = current.name;
      tdPriceElement.textContent = current.price;
      tdFactorElement.textContent = current.decFactor;

      let checkBoxElement = document.createElement('input');
      checkBoxElement.type = 'checkbox';

      tdMarkElement.appendChild(checkBoxElement);
      trElement.appendChild(tdMarkElement);

      tableBody.appendChild(trElement);
    }



  }

  function buy() {
    let resultTextArea = document.getElementsByTagName('textarea')[1];
    let output = [];

    let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
      .filter(e => e.checked === true)
      .map(e => e.parentNode.parentNode);

    let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerText).join(', ');

    output.push(`Bought furniture: ${bought}`);

    let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerText).map(Number)
      .reduce((acc, current) => acc + current, 0);

    output.push(`Total price: ${totalPrice.toFixed(2)}`);

    let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerText).map(Number)
      .reduce((acc, current) => acc + current, 0) / toBuy.length;

    output.push(`Average decoration factor: ${averageFactor}`);

    resultTextArea.value = output.join('\n');
  }
}