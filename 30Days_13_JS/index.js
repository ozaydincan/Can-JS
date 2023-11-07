console.assert(10 > 2*10, "10 is lesser than 2 * 10");

let i = 0;
/*
while(1){
    i++;
    if (i === 5){
        console.warn("This is a warning be careful. Counter is halfway there!\nCounter: %d", i);
    }
    if (i === 10){
        console.error("The counter is full!\nCounter: %d", i);
        break;
    }
}
*/
const countries = require('./countries');

console.time("While loop");
while(i < countries.length){
    console.log(countries[i].name);
    i++;
}
console.timeEnd("While loop");

console.time("Regular for loop");
for (let j = 0; j < countries.length; j++){
    console.log(countries[j].name);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const country of countries){
    console.log(country.name);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach((country) => {
    console.log(country.name);
  })
console.timeEnd("forEach loop");