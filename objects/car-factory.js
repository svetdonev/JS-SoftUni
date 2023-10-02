function carFactory(carObj) {
    let car = {};
    let engine = {};
    let carriage = {};
    let wheels = [];

    car.model = carObj.model;

    if(carObj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if(carObj.power > 90 && carObj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }
    car.engine = engine;

    carriage.type = carObj.carriage;
    carriage.color = carObj.color;

    car.carriage = carriage;

    let resultWheelsSize = carObj.wheelsize % 2 == 0 ? carObj.wheelsize -= 1 : carObj.wheelsize;
    for(let i = 0; i < 4; i++) {
        wheels.push(resultWheelsSize);
    }

    car.wheels = wheels;

    return car;
}

carFactory({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
});

carFactory({ 
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 
});