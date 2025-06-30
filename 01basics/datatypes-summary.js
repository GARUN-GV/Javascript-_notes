// there are two types of data
        /*  Primitive  (call by value)-> Primitive types are immutable and hold a single value. They are stored by value, meaning the actual value is stored in memory.
            If a value is immutable, you cannot modify it directly — you can only replace it with a new value.
            Example with Primitive (Immutable):
                    let name = "Garun";
                    name[0] = "B";  // ❌ does nothing
                    console.log(name);
            7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false bcz it return a unique object while ppassing a same value


// const bigNumber = 3456543576654356754n



// Reference (Non primitive)->Non-primitive types are mutable and can store multiple values. They are stored by reference, meaning the variable holds a reference (or address) to the actual data in memory.
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj={
name: "garun",
age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//js is dynamically type language or static typed language?
     // JavaScript is a dynamically typed language.
    //   -No need to declare data types explicitly: You don’t need to specify the type of variable when declaring it.

     //    -Type can change at runtime: A variable can hold different types of values at different times during execution.

     // In contrast:
     // A statically typed language (like Java or C++) requires you to declare the type of a variable, and that type cannot change.
     // JavaScript is a dynamically typed language, meaning variables do not require explicit type declarations and can change types at runtime, unlike statically typed languages like Java or
    //C++ where variable types are fixed; for static typing in JavaScript, TypeScript can be used.


//null ka data type-> object
//function ka data type-> function object


// https://262.ecma-international.org/5.1/#sec-11.4.3
