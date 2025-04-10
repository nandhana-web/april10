var readlineSync = require('readline-sync');

let num1 = readlineSync.question("Enter a number");
let num2 = readlineSync.question("Enter a number");
let sum = parseInt(num1) + parseInt(num2);
console.log(sum);