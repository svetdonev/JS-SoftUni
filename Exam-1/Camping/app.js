class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = 
        {
            "child": 150, 
            "student": 300, 
            "collegian": 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw Error('Unsuccessful registration at the camp.');
        } else {
            if(this.listOfParticipants.find(n => this.name)) {
                return `The ${name} is already registered at the camp.`
            } else {
                if(money < this.priceForTheCamp[condition]) {
                    return `The money is not enough to pay the stay at the camp.`;
                }

                let current = {
                    name,
                    condition,
                    power: 100,
                    wins: 0
                };

                this.listOfParticipants.push(current);
                return `The ${name} was successfully registered.`;
            }
        }
    }

    unregisterParticipant (name) {
        let initialLength = this.listOfParticipants.length;

        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);

        if (initialLength === this.listOfParticipants.length) {
            throw Error(`The ${name} is not registered in the camp`);
        }

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBaloonFights') {
            

            return person1;
            
        } else if (typeOfGame == 'Battleship') {

        }
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));