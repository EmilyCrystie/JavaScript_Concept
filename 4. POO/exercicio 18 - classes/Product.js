class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock =+ quantity
    }

    calculateDiscount(percentage){
        return this.price * ((100 - percentage) / 100)
    }
}

const rice = new Product("Arroz","Agulha tipo A", 5)
console.log(rice)

rice.addToStock(3)
console.log(rice)

const priceWithDiscount = rice.calculateDiscount(5)
console.log(priceWithDiscount)