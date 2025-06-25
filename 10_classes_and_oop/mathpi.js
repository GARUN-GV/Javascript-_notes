const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  //(OBJECT,PROPERTY)

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//how to set object property descripter for user define object
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}




//can you change the value of pi in math?
        //no, youcan't change thw value of math.pi in js. The math object and its properties like Math.
        //PI are built-in and read only meaning they are non-writable, non-enumerable, non-configurable.  evenyou don't assign the new value to the PI.


// enumerable-> it refer to whether a properties can be listed or shown during enumeration.
// emuration means listing or iterating over the properties or values of something.like an object.
//  in js enumeration is process of going thourh the keys of object one by one.
    const obj ={
	a:1,
	b:2}
for(let key in obj){
 console.log(obj[key]);}


console.log(Object.keys(obj)) // [a,b]



// Ques-> why for of loop not work on object?
	// the for of doesnot work on plai object in js because object are not iterable. it only work on arrays, string, map, set . for object we use forin loop or _
		const person={
 				name:"garun", age:22};
 for(let [key,value] of Object.entries(person))
{
console.log(key ,value);}