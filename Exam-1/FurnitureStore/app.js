window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');
    let table = document.getElementById('furniture-list');
    let addBtn = document.getElementById('add');
    let totalPrice = document.querySelector('.total-price');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        if (modelInputElement.value && descriptionInputElement.value && price > 0 && year > 0) {
            let rowElement = document.createElement('tr');
            let modelTdElement = document.createElement('td');
            let priceTdElement = document.createElement('td');
            let actionBtns = document.createElement('td');
            let moreInfoBtn = document.createElement('button');
            let buyBtn = document.createElement('button');
            let infoRowElement = document.createElement('tr');

            rowElement.classList.add('info');
            moreInfoBtn.classList.add('moreBtn');
            buyBtn.classList.add('buyBtn');

            moreInfoBtn.addEventListener('click', (e) => {
                if (e.currentTarget.textContent == 'More Info') {
                    e.currentTarget.textContent = 'Less info';
                    infoRowElement.style.display = 'contents';
                    let yearTdEl = document.createElement('td');
                    let descriptionTdEl = document.createElement('td');
                    descriptionTdEl.setAttribute('colspan', 3);

                    yearTdEl.textContent = `Year: ${year}`;
                    descriptionTdEl.textContent = `Description: ${description}`;

                    infoRowElement.appendChild(yearTdEl);
                    infoRowElement.appendChild(descriptionTdEl);
                } else {
                    e.currentTarget.textContent = 'More Info';
                    infoRowElement.style.display = 'none';
                }
            });

            buyBtn.addEventListener('click', (e) => {
                let currentTotalPrice = Number(totalPrice.textContent);
                totalPrice.textContent = (currentTotalPrice + price).toFixed(2);

                rowElement.remove();
                infoRowElement.remove();
            })

            modelTdElement.textContent = model;
            priceTdElement.textContent = price.toFixed(2);
            moreInfoBtn.textContent = 'More Info';
            buyBtn.textContent = 'Buy it';

            actionBtns.appendChild(moreInfoBtn);
            actionBtns.appendChild(buyBtn);
            rowElement.appendChild(modelTdElement);
            rowElement.appendChild(priceTdElement);
            rowElement.appendChild(actionBtns);

            let yearTdElement = document.createElement('td');
            let descriptionTdElement = document.createElement('td');

            infoRowElement.classList.add('hide');
            infoRowElement.style.display = 'none';
            yearTdElement.textContent = year;
            descriptionTdElement.textContent = description;

            table.appendChild(rowElement);
            table.appendChild(infoRowElement);
        }
    });
}