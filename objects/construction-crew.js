function solve(workerObj){
    let worker = workerObj;

    if(worker['dizziness'] == true) {
        worker['levelOfHydrated'] += worker['weight'] * 0.1 * worker['experience'];
        worker['dizziness'] = false;
    }

    return worker;
}

solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });