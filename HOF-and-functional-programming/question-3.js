const INR = 80
const products = [
    {
        name: "Samsung Galaxy S21",
        manufactured: "2022-03-25",
        expiry: "2022-04-04",
        price: "$799",
    },
    {
        name: "Apple iPhone 13",
        manufactured: "2022-02-28",
        expiry: "2022-03-10",
        price: "$999",
    },
    {
        name: "Dell XPS 13",
        manufactured: "2022-01-15",
        expiry: "2022-01-25",
        price: "$1299",
    },
    {
        name: "HP Spectre x360",
        manufactured: "2022-02-01",
        expiry: "2022-02-11",
        price: "$1399",
    },
    {
        name: "Logitech G Pro Wireless",
        manufactured: "2022-03-10",
        expiry: "2022-03-20",
        price: "$149",
    },
];

function convertToInr(productList) {
    return productList.map((product) => {
        return { ...product, price: parseInt(product.price.replace('$', "") * INR).toString().concat(' Rs') }
    })
}
console.log(convertToInr(products))