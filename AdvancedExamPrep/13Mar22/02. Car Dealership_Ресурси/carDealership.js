class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || Number.isInteger(horsepower) || horsepower < 0 ||
            price < 0 || mileage < 0) {
            throw Error("Invalid input!");
        }

        this.availableCars.push({
            model: model,
            horsepower: horsepower,
            price: Number(price),
            mileage: Number(mileage)
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;

    }

    sellCar(model, desiredMileage) {
        let currentCar = this.availableCars.find(car => car["model"] === model);
        if (currentCar === undefined) {
            throw Error(`${model} was not found!`)
        };

        let currentMileage = currentCar.mileage;
        if (currentMileage <= desiredMileage) {
        } else if (currentMileage - desiredMileage <= 40000) {
            currentCar.price *= 0.95;
        } else if (currentMileage - desiredMileage > 40000) {
            currentCar.price *= 0.9;
        }

        currentCar["soldPrice"] = currentCar.price;
        delete currentCar.price;
        delete currentCar.mileage;

        this.soldCars.push(currentCar);
        this.availableCars.splice(this.availableCars.map(obj => obj.model).indexOf(model), 1);

        this.totalIncome += currentCar.soldPrice;

        return `${model} was sold for ${currentCar.soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }
        let buff = "-Available cars:"
        this.availableCars.forEach(car => {
            buff += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
        });

        return buff;

    }

    salesReport(criteria) {
        if (criteria === "horsepower") {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === "model") {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw Error("Invalid criteria!");
        }

        let buff = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        buff += `-${this.soldCars.length} cars sold:`;

        this.soldCars.forEach(car => {
            buff += `\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`;
        });

        return buff;
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));



