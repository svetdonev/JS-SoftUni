class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp =
        {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw Error('Unsuccessful registration at the camp.');
        } else {
            if (this.listOfParticipants.some(n => n.name === name)) {
                return `The ${name} is already registered at the camp.`
            }

            if (money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`;
            }

            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            };

            this.listOfParticipants.push(participant);
            return `The ${name} was successfully registered.`;
        }
    }

    unregisterParticipant(name) {
        let initialLength = this.listOfParticipants.length;
        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);

        if (initialLength === this.listOfParticipants.length) {
            throw Error(`The ${name} is not registered in the camp.`);
        }

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(x => x.name == participant1);

        if (typeOfGame == 'WaterBalloonFights') {
            let p2 = this.listOfParticipants.find(x => x.name == participant2);

            if (p1 == undefined || p2 == undefined) {
                return `Invalid entered name/s.`;
            }

            if (p1.condition != p2.condition) {
                throw Error(`Choose players with equal condition.`);
            }

            if (p1.power > p2.power) {
                p1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (p1.power < p2.power) {
                p2.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame == 'Battleship') {
            if (p1 == undefined) {
                return `Invalid entered name/s.`;
            }
            p1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        //let res = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        /* for (const participant of this.listOfParticipants.sort((a, b) => b.wins - a.wins)) {
            res += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
        } */

        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
            });

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
//console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
//console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Petar Petarson"));
console.log(summerCamp.toString());