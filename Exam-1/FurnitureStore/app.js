window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');
    let addBtn = document.getElementById('add');
    let table = document.getElementById('furniture-list');
    let moreInfoBtn = document.createElement('button');
    let buyBtn = document.createElement('button');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (modelElement.value != '' && descriptionElement.value != '' && yearElement.value > 0 && priceElement.value > 0) {
            let trElement = document.createElement('tr');
            trElement.classList.add('info');

            let tdModelElement = document.createElement('td');
            let tdPriceElement = document.createElement('td');
            let tdBtnsElement = document.createElement('td');

            moreInfoBtn.classList.add('moreBtn');
            moreInfoBtn.innerText = 'More information';
            buyBtn.classList.add('buyBtn');
            buyBtn.innerText = 'Buy it';

            tdBtnsElement.appendChild(moreInfoBtn);
            tdBtnsElement.appendChild(buyBtn);

            tdModelElement.textContent = modelElement.value;
            tdPriceElement.textContent = Number(priceElement.value).toFixed(2);

            trElement.appendChild(tdModelElement);
            trElement.appendChild(tdPriceElement);
            trElement.appendChild(tdBtnsElement);
            table.appendChild(trElement);

            modelElement.value = '';
            priceElement.value = '';
            descriptionElement.value = '';
            yearElement.value = '';
        }
    });

    moreInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moreInfoBtn.innerText = 'Less Info';

        let trElement = document.createElement('tr');
        let tdPriceElement = document.createElement('td');
        let tdDescriptionElement = document.createElement('td');
        trElement.classList.add('hide');
        trElement.style.display = 'contents';

        trElement.classList.add('none');
        trElement.appendChild(tdPriceElement);
        trElement.appendChild(tdDescriptionElement);
        table.appendChild(trElement);
    });
}
