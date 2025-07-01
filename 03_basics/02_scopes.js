//var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "garun"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two() //✅ Direct function call — no `call()` needed
}


/*
Why two() doesn't need call()?
🔹 call() is not required for normal function invocation.
When you write two(), you're simply calling the function like usual.
Since two() is defined inside one(), it's in the same lexical scope, so you can directly call it.

✅ What is .call() then?
.call() is used to manually set the this context of a function, usually when:
You're working with objects or
You want to borrow a method from another object.


function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Garun" };
greet.call(person);  // "Hello, Garun"

*/



// one()

if (true) {
    const username = "garun"
    if (username === "garun") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisting
console.log(addone(5))
function addone(num){
    return num + 1
}


//hoisting is not perform in this type of function declaration
addTwo(5)
const addTwo = function(num){
    return num + 2
}
