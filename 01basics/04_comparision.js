

// typescript doesnot allow to compare the two different data types like-> "2">1

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true
// console.log("02" > 1);  //true

console.log(null > 0);  //false
console.log(null == 0);   //false
console.log(null >= 0);   //true

//the reason is that an equality check == and comparision > < >= <= work differently
//comparison convert null to a number , treating it as 0.
//That's why null>=0 is true and null>0 is false


// for undefined  all are false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it strictly check the data because it check the data type of value


console.log("2" === 2);
