class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let buff = "Successfully added ";

        Array.from(vegetables).forEach(element => {
            let vegie = element.split(" ");
            let type = vegie[0];
            let quantity = Number(vegie[1]);
            let price = Number(vegie[2]);


            let checkVegie = this.availableProducts.find(x => x.type == type);

            if (checkVegie === undefined) {
                this.availableProducts.push({
                    type: type,
                    quantity: quantity,
                    price: price
                });
                buff += `${type}, `;
            } else {
                checkVegie.quantity += quantity;
                if (checkVegie.price < price) {
                    checkVegie.price = price;
                }
            }
        });

        buff = buff.substring(0, buff.length - 2);
        return buff;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;

        Array.from(selectedProducts).forEach(element => {
            let vegie = element.split(" ");
            let type = vegie[0];
            let quantity = Number(vegie[1]);

            let checkVegie = this.availableProducts.find(x => x.type == type);

            if (checkVegie === undefined) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else if (checkVegie.quantity < quantity) {
                throw Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            checkVegie.quantity -= quantity;
            totalPrice += quantity * checkVegie.price;
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;

    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);

        let checkVegie = this.availableProducts.find(x => x.type == type);

        if (checkVegie === undefined) {
            throw Error(`${type} is not available in the store.`);
        } else if (checkVegie.quantity < quantity) {
            checkVegie.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        checkVegie.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let buff = `Available vegetables:\n`;

        this.availableProducts.
            sort((a, b) => a.price - b.price).
            forEach(vegie => {
                buff += `${vegie.type}-${vegie.quantity}-$${vegie.price}\n`;
            });

        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return buff;
    }

}



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



