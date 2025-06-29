

// typescript doesnot allow to compare the two different data types like-> "2">1

console.log(2 > 1); //true
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);  //true
console.log("02" > 1);  //true

console.log(null > 0);  //false  The > operator converts null to a number → Number(null) is 0. So the comparison becomes 0 > 0 → false
console.log(null == 0);   //false This is a loose equality (==) check. null is only loosely equal to undefined, and not to 0, false, or anything else. So null == 0 → false
console.log(null >= 0);   //true The >= operator, like >, also converts both operands to numbers. So it becomes: Number(null) >= 0 → 0 >= 0 → true

//the reason is that an equality check == and comparision > < >= <= work differently
//comparison convert null to a number , treating it as 0.
//That's why null>=0 is true and null>0 is false


// for undefined  all are false

console.log(undefined == 0); //The loose equality operator == does not consider undefined equal to 0.  
/* undefined == null        // true
undefined == 0           // false
undefined == false       // false
*/
console.log(undefined > 0);  //JavaScript tries to convert undefined to a number.Number(undefined) is NaN.

console.log(undefined < 0);


// === it strictly check the data because it check the data type of value
// == double equal-> loose equality (Compares values after converting them to the same type.)
// === triple equal-> strict equality ( is the strict equality operator that compares both value and data type without performing any type conversion.)

console.log("2" === 2);
