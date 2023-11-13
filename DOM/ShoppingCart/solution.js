function solve() {
    let addButton = document.getElementsByClassName('add-product');
    let arrayAddButton = Array.from(addButton);
    let textArea = document.getElementsByTagName('textarea')[0];
    let price = 0;
    let outputProducts = [];

    for (let i = 0; i < arrayAddButton.length; i++) {
        arrayAddButton[i].addEventListener('click', addToCart)
    }

    let checkoutBtn = document.getElementsByClassName('checkout')[0];
    checkoutBtn.addEventListener('click', checkOut);

    function checkOut() {
        let finalSting = `You bought ${outputProducts.join(', ')} for ${price.toFixed(2)}.`;
        textArea.value += finalSting;

        let allButtons = document.getElementsByTagName('button');

        for (let btn of allButtons) {
            btn.disabled = true;
        }
    }

    function addToCart(ev) {
        let productElement = ev.target.closest('.product');
        let productName = productElement.querySelector('.product-title').textContent;
        let productPrice = parseFloat(productElement.querySelector('.product-line-price').textContent);

        if (!outputProducts.includes(productName)) {
            outputProducts.push(productName);
        }

        let result = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        price += Number(productPrice);
        textArea.value += result;
    }
} 