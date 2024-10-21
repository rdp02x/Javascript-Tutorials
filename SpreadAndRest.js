// Spread Operator is used to unpack things (Things like Arrays or Strings)
// Spread operator uses symbol (...)

let temp = ["Moew", "Bow", "Mooo", "Chirp", "Heeeee", "Yooo"];
let temp2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(temp);
console.log(... temp);
console.log(... temp2);


// Rest Operator is used to pack things into a single array
// Rest operator uses symbol (...rest)


let snacks1 = "Chocolate";
let snacks2 = "Chips";
let snacks3 = "Roll";
let snacks4 = "Sweets";
let restEg =  [snacks1, snacks2, snacks3, snacks4];

console.log(restEg);