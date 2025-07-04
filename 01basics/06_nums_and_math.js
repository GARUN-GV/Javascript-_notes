const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));   //toFixed(1) formats the number with 1 digit after the decimal.
//Formats a number with a fixed number of digits after the decimal point.


//

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));    //123.8  //toPrecision(4) formats the number to 4 significant digits, not just digits after the decimal.
// formats a number to a specified number of significant digits (total digits, not just after decimal).

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
