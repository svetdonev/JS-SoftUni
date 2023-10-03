function solve(input){
    let res = [];

    for(let i = 0; i < input.length; i++) {
        let obj = {};
        let [currentTown, currentProduct, currentPrice] = input[i].split(' | ');
        currentPrice = Number(currentPrice);

        let productExists = false;

        for (const existingObj of res) {
            if (existingObj.currentProduct === currentProduct) {
                if (currentPrice < existingObj.currentPrice) {
                    existingObj.town = currentTown;
                    existingObj.currentPrice = currentPrice;
                }
                productExists = true;
                break;
            }
        }

        if (!productExists) {
            obj.town = currentTown;
            obj.currentProduct = currentProduct;
            obj.currentPrice = currentPrice;
            res.push(obj);
        }
    }

    for (const el of res) {
        console.log(`${el.currentProduct} -> ${el.currentPrice} (${el.town})`);
    }
};

solve(
    ['Sample Town | Sample Product | 1000',
     'Sample Town | Orange | 2',
     'Sample Town | Peach | 1',
     'Sofia | Orange | 3',
     'Sofia | Peach | 2',
     'New York | Sample Product | 1000.1',
     'New York | Burger | 10'
    ]
);