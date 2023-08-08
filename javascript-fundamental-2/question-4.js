function findMaxAndMinOfProduct(products) {
    let maxPriceList = products[0]
    let minPriceList = products[0]
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > maxPriceList.price) {
            maxPriceList = products[i]
        }
        if (products[i].price < minPriceList.price) {
            minPriceList = products[i]
        }
    }
    console.log(`The product with maximum amount is ${maxPriceList.name} which is priced at Rs. ${maxPriceList.price}`)
    console.log(`The product with minimum amount is ${minPriceList.name} which is priced at Rs. ${minPriceList.price}`)
}

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile charger", price: 1500 },
]

findMaxAndMinOfProduct(products)