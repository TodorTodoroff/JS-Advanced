class Garden {

    constructor(spaceAvailable) {
        this._spaceAvailable = Number(spaceAvailable);
        this._plants = [];
        this._storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this._spaceAvailable < Number(spaceRequired)) {
            throw Error("Not enough space in the garden.");
        }

        let plantToAdd = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        };

        this._plants.push(plantToAdd);

        this._spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this._plants.find(c => c.plantName == plantName);
        if (plant === undefined) {
            throw Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe === true) {
            throw Error(`The ${plantName} is already ripe.`)
        } else if (Number(quantity) <= 0) {
            throw Error("The quantity cannot be zero or negative.");
        }

        this._plants.find(c => c.plantName == plantName).ripe = true;
        this._plants.find(c => c.plantName == plantName).quantity += Number(quantity);

        if (Number(quantity) === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }

    }

    harvestPlant(plantName) {
        let plant = this._plants.find(c => c.plantName == plantName);
        if (plant === undefined) {
            throw Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe === false) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let indexOfObject = this._plants.findIndex(object => {
            return object.plantName == plantName;
        });

        this._plants.splice(indexOfObject, 1);

        this._storage.push({
            plantName: plantName,
            quantity: plant.quantity
        })

        this._spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let buff = "";

        buff += `The garden has ${this._spaceAvailable} free space left.\n`;
        buff += "Plants in the garden: ";

        this._plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(plant => buff += `${plant.plantName}, `);

        buff = buff.substring(0, buff.length - 2) + `\n`;
        buff += `Plants in storage: `;

        this._storage.length == 0 ?
        buff += "The storage is empty." : 
        this._storage.forEach(plant => buff += `${plant.plantName} (${plant.quantity}), `);

        buff = buff.substring(0, buff.length - 2);

        return buff;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





