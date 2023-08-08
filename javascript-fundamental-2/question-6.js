const printProductDetails = (details) => (
    `
Below are product details.
name: ${details.name}
price: ${details.price}
color: ${details.color}
hardDisk: ${details.hardDisk}
`
)
const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Gray",
    hardDisk: "256 Gb"
}

console.log(printProductDetails(productDetails));