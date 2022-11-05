class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }


    addGoal(peak, altitude) {
        if (Object(this.goals).hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);
        let differenceResourcesAndTime = this.resources - time * 10;
        if (!Object(this.goals).hasOwnProperty(peak)) {
            throw Error(`${peak} is not in your current goals`);
        } else if (this.resources == 0) {
            throw Error("You don't have enough resources to start the hike");
        } else if (differenceResourcesAndTime < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({
            peak: peak,
            time: time,
            difficultyLevel: difficultyLevel
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;

    }

    rest(time) {
        time = Number(time);

        this.resources += time * 10;

        if (this.resources >= 100) {
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        let buff = null;
        if (this.listOfHikes.length == 0) {
            buff = `${this.username} has not done any hiking yet`;
        }

        let hike = this.listOfHikes
            .filter(x => x.difficultyLevel == criteria)
            .sort((a, b) => {
                a.time - b.time
            })[0];


        if (criteria != "all" && hike !== undefined) {
            buff = `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`;
        }

        if (criteria == "all") {
            buff = "All hiking records:";
            this.listOfHikes.forEach(h => {
                buff += `\n${this.username} hiked ${h.peak} for ${h.time} hours`;
            });
        }

        if (buff == null) {
            buff = `${this.username} has not done any ${criteria} hiking yet`;
        }

        return buff;
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


