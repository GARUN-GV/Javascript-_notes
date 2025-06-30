const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 
console.log(all_new_heros);
/*spread operator -> The spread operator (...) in JavaScript is used to unpack elements from arrays, objects, or iterables into individual elements.
The spread operator ... expands an array or object into its individual elements or properties.
*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/* The flat() method creates a new array with all sub-array elements flattened into a single level.
Infinity means keep flattening until there are no more nested arrays.
*/



console.log(Array.isArray("Hitesh"))  //Checks if the given value is an array.
console.log(Array.from("Hitesh"))   //converts iterable or array-like objects into a real array.
console.log(Array.from({name: "hitesh"})) // interesting // []


/*{name: "hitesh"} is an object, but not iterable or array-like.
Array.from() expects:
  An iterable (like string, Set, Map)
  OR an array-like object (must have a length property)
   Since { name: "hitesh" } does not have a length, Array.from() returns an empty array.
   */


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
