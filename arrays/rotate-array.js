function solve(input, rotations) {
    for(let i = 0; i < rotations; i++) {
        let lastEl = input.pop();
        input.unshift(lastEl);
    }

    console.log(input.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);