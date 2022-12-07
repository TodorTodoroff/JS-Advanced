class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        spaceRequired = Number(spaceRequired);
        quantity = Number(quantity);

        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({
            product,
            quantity
        });

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        minimalQuantity = Number(minimalQuantity);

        let storedProduct = this._findProductByName(product);

        if (storedProduct == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (minimalQuantity <= storedProduct.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            let diff = minimalQuantity - storedProduct.quantity;
            this.products.find(x => x.product == product).quantity = minimalQuantity;

            return `You added ${diff} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        let storedProduct = this._findProductByName(product);
        if (storedProduct == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        this.products.find(x => x.product == product).quantity -= 1;
        this.sales.push({
            product: product,
            quantity: 1
        });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        let sales = this.sales.length;
        if (sales == 0) {
            throw new Error("There are no sales today!");
        }

        let buff = `You sold ${sales} products today!`;
        buff += `\nProducts in the warehouse:`;

        this.products.forEach(prod => {
            buff += `\n${prod.product}-${prod.quantity} more left`
        });

        return buff;
    }


    _findProductByName(name) {
        return this.products.find(x => x.product == name);
    }

}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



