class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }


    addParticipant(participantName, participantGender) {

        for (const key in this.participants) {
            if (key == participantName) {
                return `${participantName} has already been added to the list`;
            }
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;
    }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
