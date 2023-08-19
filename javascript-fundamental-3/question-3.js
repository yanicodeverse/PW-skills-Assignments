const obj = {
    name: "John",
    age: 25,
    city: "New York"
}
const no_ofProperties = (object) => `The object has ${Object.keys(object).length} properties`
console.log(no_ofProperties(obj));

