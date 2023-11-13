 function solve() {
    let addButton1 = document.getElementsByClassName('add-product')[0];
    let addButton2 = document.getElementsByClassName('add-product')[1];
    let addButton3 = document.getElementsByClassName('add-product')[2];
    let textArea = document.getElementsByTagName('textarea')[0];
    let price = 0;
    let outputProducts = [];

    addButton1.addEventListener('click', addToCart);
    addButton2.addEventListener('click', addToCart);
    addButton3.addEventListener('click', addToCart);
    

    let checkoutBtn = document.getElementsByClassName('checkout')[0];

    checkoutBtn.addEventListener('click', checkOut);

    function checkOut() {
        textArea.value += `You bought ${outputProducts.join(', ')} for ${price.toFixed(2)}.`;

        let allButtons = document.getElementsByTagName('button');

        for (let btn of allButtons) {
            btn.disabled = true;
        }
    }

    function addToCart(ev) {
        let productElement = ev.target.closest('.product');
        let productName = productElement.querySelector('.product-title').textContent;
        parseFloat(productElement.querySelector('.product-line-price').textContent);

        if (isNaN(productPrice)) {
            return;
        }

        if (!outputProducts.includes(productName)) {
            outputProducts.push(productName);
            price += Number(productPrice);

            textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart. \n`;
        }
    }
} 