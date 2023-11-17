function autoEngineering (cars) {
    let result = {};

    for (const car of cars) {
        let [brand, model, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);

        if(!result[brand]) {
            result[brand] = {};
        }

        if(!result[brand][model]) {
            result[brand][model] = 0;
        }

        result[brand][model] += producedCars;
    }

    for (const [brand, models] of Object.entries(result)) {
        console.log(`${brand}`);

        for (const [model, producedCars] of Object.entries(models)) {
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}


autoEngineering(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);