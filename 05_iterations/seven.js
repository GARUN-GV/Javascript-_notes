const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
/*
map-> it creates a new array by applying a function tto each element of an existing array. it transform the dtaa but doesnot modify the original array.
it iss a powerful array method used for iterating over an array and creating a new arraay conttaining the resukts of calling  a provided  functiom to modify each element
array.map(function(currelement, index, array){})


different from filter-> map() transform element but filter select the element on a specific condition
*/

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



let age=[10,20,30,40]
let my= age.map( (n)=>n+1)
console.log(my);
