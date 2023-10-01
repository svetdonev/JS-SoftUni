function solve(input) {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0) {
            result.push(input[i]);
        } else {
            result.unshift(input[i]);
        }
    }

    return result;
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));