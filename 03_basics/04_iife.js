// Immediately Invoked Function Expression (IIFE)

(function chai() { // ye named iifi hai 
    console.log(`DB CONNECTED`);  // iife imedite exectue function to avoid global scope pollution  => iceream analogy
})();

// chai()

( (name) => { // ye unname iife hai with parameter 
    console.log(`DB CONNECTED ${name}`);
})("Akash")
