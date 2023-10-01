function sortNumbers(numbers) {
    let result = [];
    numbers.sort((a, b) => a - b);

    for(let i = 0; i <= numbers.length; i++) {
        let currentSmallest = numbers.shift();
        let currentBiggest = numbers.pop();

        result.push(currentSmallest);
        result.push(currentBiggest);
        i = 0;
    }

    return result;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);