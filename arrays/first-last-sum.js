function solve(input) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    let result = firstElement + lastElement;

    return result;
}

console.log(solve(['20', '30', '40']));