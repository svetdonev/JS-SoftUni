function solve(arr) {
    let currentNumber = arr[0];
    let result = [];
    result.push(currentNumber)

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] >= currentNumber) {
            result.push(arr[i]);
            currentNumber = arr[i];
        }
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));