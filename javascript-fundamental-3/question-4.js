const checkProperty = (obj, property) => obj.hasOwnProperty(property)

const obj = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log(checkProperty(obj, "name"));