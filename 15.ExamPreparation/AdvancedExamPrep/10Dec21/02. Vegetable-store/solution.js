class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let buff = "Successfully added ";
        vegetables.forEach(el => {
            let all = el.split(" ");
            let product = all[0];
            let quantity = Number(all[1]);
            let price = Number(all[2]);

            let storedProd = this._productByName(product);
            if (storedProd != undefined) {
                this.availableProducts.find(x => x.type == product).quantity += quantity;
                if (price > storedProd.price) {
                    this.availableProducts.find(x => x.type == product).price = price;
                }

            } else {
                this.availableProducts.push({
                    type: product,
                    quantity: quantity,
                    price: price
                });
                buff += `${product}, `
            }
        });
        return buff.substring(0, buff.length - 2);
    }

    buyingVegetables(selectedProducts) {
        let bill = 0;
        selectedProducts.forEach(p => {
            let line = p.split(" ");
            let product = line[0];
            let quantity = Number(line[1]);

            let storedProd = this._productByName(product);
            if (storedProd == undefined) {
                throw new Error(`${product} is not available in the store, your current bill is $${bill.toFixed(2)}.`);
            }
            if (quantity > storedProd.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${product} is not available in the store, your current bill is $${bill.toFixed(2)}.`);
            }

            let currentPrice = quantity * storedProd.price;
            this.availableProducts.find(x => x.type == product).quantity -= quantity;
            bill += currentPrice;
        });
        return `Great choice! You must pay the following amount $${bill.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let buff = "";
        let storedProd = this._productByName(type);
        if (storedProd == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > storedProd.quantity) {
            buff = `The entire quantity of the ${type} has been removed.`;
            this.availableProducts.find(x => x.type == type).quantity = 0;
        } else {
            this.availableProducts.find(x => x.type == type).quantity -= quantity;
            buff = `Some quantity of the ${type} has been removed.`;
        }
        return buff;
    }

    revision(){
        let buff = 'Available vegetables:';
        this.availableProducts.sort((x,y) => x.price - y.price).forEach(x => {
            buff += `\n${x.type}-${x.quantity}-$${x.price.toFixed(2)}`;
        });
        buff += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
        
        return buff;
    }


    _productByName(productName) {
        return this.availableProducts.find(x => x.type == productName);
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



