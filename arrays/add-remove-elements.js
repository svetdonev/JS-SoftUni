function solve(input) {
    let result = [];
    let counter = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            result.push(counter++);
        } else {
            result.pop();
            counter++;
        }
    }

    if (result.length == 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove'])