var readlineSync = require('readline-sync');

let num1 = readlineSync.question("Enter a number");
let num2 = readlineSync.question("Enter a number");
let division = parseInt(num1) / parseInt(num2);
console.log(division);