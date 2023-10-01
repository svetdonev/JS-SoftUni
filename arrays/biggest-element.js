function solve(input) {
    let maxValue = Number.MIN_VALUE;

    for (const row of input) {
        for (const el of row) {
            if(el >= maxValue) {
                maxValue = el;
            }
        }
    }

    return maxValue;
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);