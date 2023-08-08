function calculateTotalCartValue(...prices) {
    const price = [...prices]
    let total = 0
    for (let i of price) {
        total += i
    }
    return `The total cart value is ${total}`
}

console.log(calculateTotalCartValue(125, 20, 30));
//other test case
//console.log(calculateTotalCartValue(125, 20, 50, 66, 98, 10.5, 6, 30)); //405.5