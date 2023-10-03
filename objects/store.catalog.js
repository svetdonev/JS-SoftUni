function solve(input){
    let sortedInput = input.sort((a, b) => a.localeCompare(b));

    let letter = '';
    for (const current of sortedInput) {
        if(current[0] !== letter) {
            letter = current[0];
            console.log(letter);
        }
        let [product, price] = current.split(' : ');
        console.log(`  ${product}: ${price}`);
    }
}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);