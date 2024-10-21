// Declare a variable using 'let' keyword
// 'let' keyword allows us reassign the variable values when we want to change it 
let name = 'Rishabdev Panchal';
let age = 19;
// console.log(name, age);



// Declare a variable using 'const' keyword
// 'const' keyword dosen't allows us reassign the variable values. It keep them as it is.
const name1 = 'RDP';
const age1 = 21;
// console.log(name1, age1);



// Primitive Datatypes in js
let stringLiteral = 'Rishabdev';
// console.log(typeof(stringLiteral));
let numberLiteral = 19;
// console.log(typeof(numberLiteral));
let booleanLiteral = true;
// console.log(typeof(booleanLiteral));
let sample1 = undefined;
// console.log(typeof(sample1));
let sample2 = null;
// console.log(typeof(sample2));



//Objects in js (A refference type)

let myInfo = {
    // Here we add something called keyvalue pairs that allows us to store more than one data in a single variable
    // Its similar to dictionary type in python 
    name: 'Rishu',
    age: 199,
    isStudent: false
}
// This objects can be accessed using 2 methods:
// Dot Notation:
myInfo.age = 19;
// console.log(myInfo.name, myInfo.age);

// Bracket Notation:
let userChoice = 'age';  // Generally be used for dynamic selections
myInfo[userChoice] = true;
// console.log(myInfo);



// Arrays (is also an refference object datatype)
let games = ['GTA V', 'Valorant', 'Call of Duty'];
// console.log(games);

// As we know js is a dynamically typed lang, we can directly add more elements to the array that to of different datatype. For Eg.
games[4] = 69;
// console.log(games);



