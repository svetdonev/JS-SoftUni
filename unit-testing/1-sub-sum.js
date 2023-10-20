function solve(input, start, end) {
    if (!Array.isArray(input)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, input.length - 1);

    let res = input.slice(startIndex, endIndex + 1).reduce((acc, x) => acc + Number(x), 0);
    
    return res;
}

module.exports = solve;