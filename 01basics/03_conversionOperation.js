let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));


//type conversion from string to number
//all data type start with capital letter like Number, String

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);



//if score="22abc"
//then let valueinnumber=Number(score)
//console.log(typeof valueinnumber) //number
//console.log(valueinnumber) //NaN


/*    NaN->  NaN, which stands for "Not a Number," is a special value in JavaScript that shows up when a mathematical operation can't return a valid number.
            This can happen if you try something like dividing zero by zero or converting a string that doesn't contain numbers.
            In JavaScript, NaN stands for "Not-a-Number." 
            It is a special numeric value that represents an undefined or unrepresentable numerical result, 
            typically arising from mathematical operations that cannot yield a valid number.
*/ 

//if score = null
//then let valueinnumber = Number(score)
//console.log(typeof valueinnumber) //number
//console.log(valueinnumber) //0

//if score = undefined
//then let valueinnumber = Number(score)
//console.log(typeof valueinnumber) //number
//console.log(valueinnumber) //NaN

//if score  = true
//then let valueinnumber = Number(score)
//console.log(typeof valueinnumber) //number
//console.log(valueinnumber) //1


let isLoggedIn = "Garun"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

//Conversion of all data type into number and become 
// "33"=>33
// "33abc"=>NaN
// true=>1
// null=>0
// undefined=>NaN

//conversion of all data type into Boolean and become
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber);  //string




// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " garun"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   //12
// console.log(1 + "2");   //12
// console.log("1" + 2 + 2);    122
// console.log(1 + 2 + "2");   32
// console.log(+true)     //1
// console.log(+"")      //0

// console.log( (3 + 4) * 5 % 3);

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
