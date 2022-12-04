class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }


    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        condition = Number(condition);
        const completedCount = Math.floor(condition / 30);

        if (!this.participants.hasOwnProperty(participantName)) {
            throw Error(`${participantName} is not in the current participants list`);
        } else if (condition < 30) {
            throw Error(`${participantName} is not well prepared and cannot finish any discipline`);
        } else if (condition < 90) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        const finalistGender = this.participants[participantName];
        const finalist = {
            participantName,
            finalistGender
        };

        this.listOfFinalists.push(finalist);

        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }


    rewarding(participantName) {
        let buff = null;
        Array.from(this.listOfFinalists).forEach(finalist => {
            if (Object.values(finalist).includes(participantName)) {
                buff = `${participantName} was rewarded with a trophy for his performance`;

            }
        });
        if (buff == null) {
            buff = `${participantName} is not in the current finalists list`;
        }
        return buff;
    }


    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        } else if (Array.from(this.listOfFinalists).filter(f => Object.values(f).includes(criteria)).length == 0 && criteria != "all") {
            return `There are no ${criteria}'s that finished the competition`
        };

        if (criteria != "all") {
            const participantName = Array.from(this.listOfFinalists).find(f => Object.values(f).includes(criteria))["participantName"];
            return `${participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else {
            let buff = `List of all ${this.competitionName} finalists:\n`
            const participantsNames = Array.
                from(this.listOfFinalists).
                sort((a, b) => a["participantName"].localeCompare(b["participantName"])).
                forEach(finalist => buff += `${finalist["participantName"]}\n`);
            return buff.substring(0, buff.length - 1);
        }
    }
}



const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("all"));




