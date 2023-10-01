function solve(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 1) {
            newArr.push(input[i]);
        }
    }

    let result = newArr.map(x => x * 2).reverse();
    console.log(result.join(' '));
}

solve([10, 15, 20, 25]);