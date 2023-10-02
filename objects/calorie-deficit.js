function solve(input) {
    let obj = {};
    let currentFood = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            currentFood = input[i];
            obj[currentFood] = 0;
        } else {
            obj[currentFood] = Number(input[i]);
        }
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);