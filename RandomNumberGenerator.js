// This generates a random number between 0 and 1 only
let randomNumber = Math.random();
console.log(randomNumber);



// To get a random number between a range we multiply it by that number:

let randomNumber1 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber1);



// To get a random number between a specific range:
const min = 10;
const max = 20;
let randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber2);