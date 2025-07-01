// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that runs immediately after it is defined.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
