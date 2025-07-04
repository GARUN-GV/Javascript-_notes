const accountID= 121234
let  accountname="garun"
var accountpassword="123245"
accountcity="delhi"

let accountstate;

console.log(accountID);

console.table(accountID,accountname,accountpassword, accountcity, accountstate);

/* accountID=22222  (wrong)
const variable-> const variable are those variable which cannot be re initialise,  block scope variable, it only initialised once, 
it cannot be redeclared or updated,Must be initialized when declared, Preferred for values that should not change 
*/

/* let variable-> block scope variable, Can be updated, but not re-declared in the same scope,
   Not hoisted in a usable way, Preferred for variables that change
*/

/* var variable-> var is a function-scoped variable declaration keyword used in JavaScript that allows re-declaration and reassignment. 
   It is hoisted, meaning the declaration is moved to the top of its function or script.
*/

/* we can directly directly declared variable name without use of variables
*/

/* if we declared any variable without initialise any value of it, then it return undefined
  console.log(accountstate)
 */


  /*Hoisting in js->   Hoisting in JavaScript is a behavior where declarations of variables, functions, and classes are conceptually moved to the top of their containing scope during the compilation phase, 
  before the code is executed. This allows these elements to be accessed before their actual declaration in the code. 

  console.log(a);  // undefined
  var a = 5;
                                           behind the scene
                                           var a;
                                           console.log(a);  // undefined
                                            a = 5;
                                            
var is hoisted and initialized to undefined.
let and const are hoisted but not initialized → ReferenceError before declaration (TDZ).
Function declarations are hoisted with definitions.
Function expressions and classes are not hoisted in a usable way.
   */
