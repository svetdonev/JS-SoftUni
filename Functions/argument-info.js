function solve() {
    let data = {};

    Array.from(arguments).forEach((line) => {
        let currentType = typeof line;
        console.log(`${currentType}: ${line}`);

        if(!data[currentType]) {
            data[currentType] = 0;
        }
        data[currentType]++;
    });

    Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}

solve('cat', 42, function() { console.log('Hello world!'); });
solve('dog', 42, function() { console.log('Second test'); });