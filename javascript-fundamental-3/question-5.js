const prompt = require('prompt-sync')({ sigint: true })
const radius = parseInt(prompt("enter the radius of a circle: "))
const area = (Math.PI * Math.pow(radius, 2)).toFixed(2)
console.log(`The area of circle is : ${area}sq.units`);