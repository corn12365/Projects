const Kelvin = 293;
// Kelvin temperature value set to 293 for a standard reference point.
const Celsius = Kelvin - 273;
// Convert temperature from Kelvin to Celsius by subtracting 273
const Fahrenheit = Math.floor(Celsius * (9/5) + 32);
// Convert temperature from Celsius to Fahrenheit by multiplying by 9/5 and adding 32
const Newton = Math.floor(Celsius * (33/100));
// Convert temperature from Celsius to Newton by multiplying by 33/100

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)

console.log(`The temperature is ${Newton} degrees Newton.`) 