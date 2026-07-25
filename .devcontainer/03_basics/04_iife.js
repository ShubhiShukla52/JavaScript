// An IIFE (Immediately Invoked Function Expression) is a function 
// that is defined and executed immediately after it is created.
// We use this to avoid polluting the global scope

(function coffee(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => { //simple or unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('shubhi')  

// if we want write two IIFE at one time we must have to end 1st one with (;)