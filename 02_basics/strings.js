//concat ->+ or best ``(string interpolation) 

const name="garun"
const repocount = 50

//concat method-1

console.log(name + repocount + " Value");

//concat method-2 (`` string interpolation)
console.log(`My name is ${name} and repo count is ${repocount}`)

//new ways to declare the string. in this we use object of js
const gamename = new String("")



// // fetch() method start the process of fetching a resource from the network, returning a promise which is fulfilled once the esponse ia available.
// the promise resolve to the response object reprensenting the response to tour request.
// the fetch promise only reject when a network error is encountered . a fetch() promise does not reject on HTTP error (404) .instead , a then() handler must check the Reponse.ok and Reponse.status properties.

// const obj={}
// fetch("url",{obj}).then().catch()
// new->constructor function
// new-> it is use to create new context, it create a new copy of object so it doenot override the previous data]

// step when we use new keyword:
// 1. first it create a empty new object(instance)
// 2. second function constructor is called due to new keyword which means argument passinto the main function
// 3. the argument inject in new keyword
// 4. deliver into function


// object.constructor => here object any name of function store variable
// instanceof, operator in js