const car = {
    make: "Audi",
    model: "R8",
    year: 2006
}

function printCarDetails(car) {
    for (let key in car) console.log(`${key}: ${car[key]}`)
}

printCarDetails(car)