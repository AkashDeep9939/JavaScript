const userEmail = "a@akash.ai"

if(userEmail) {
    console.log("GOT the user email")
}else {
    console.log("Don't  have user email");
}

// falsy value 

// false, 0, -0, BigINt 0n, "", bull, undefined, NaN ye sab false value hai 


// tuthy value 
// "0" 'false', " ", []. {}, function() <- ye empty function bhi truthy value hai 

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObjects = {}

if (Object(emptyObjects).lenght === 0){
    console.log("Object is Empty");
}

// Bullish Coalescing Operator (??): null undefinrd 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary operator 
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");;