function solve(input) {
    let obj = {};

    for (const el of input) {
        let [town, population] = el.split(' <-> ');

        if(!obj[town]){
            obj[town] = 0;
        }
        obj[town] += Number(population);
    }

    for (const kvp in obj) {
        console.log(`${kvp} : ${obj[kvp]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);