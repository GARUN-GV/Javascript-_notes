// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)


// Array methods
    myArr.push(6)  // adds one or more elements to the end of an array
    myArr.push(7)
    myArr.pop()   // removes the last element from an array and returns that removed element
    myArr.unshift(9) // add one or more elemments to the beginning of the array
    myArr.shift()    // removes the first element from an array and returns that removed element. It modifies the original array.

console.log(myArr.includes(9)); // it is used to check the given element is present or not
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //  joins all elements of an array into a single string, separated by commas by default, and returns that string.

// console.log(myArr);
// console.log( newArr);


// slice, splice


console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) //slice() returns a shallow copy of a portion of the array into a new array, selected from start to end (not including end).
console.log(myn1);


console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)  //It changes (mutates) the original array and returns an array of removed elements.
console.log(myn2);

console.log("C ", myArr);
