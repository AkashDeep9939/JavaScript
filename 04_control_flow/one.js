// first condtion flow 1) if

const isUserLoffedIn = true

// condition operation <, >, <=, >=, ==, !=, === ( strick equal)

if(true) {  // condition is true the go inside scope

}

if(2 == "2"){
    console.log("executed");
}

// const temperatue = 41

// if(temperatue < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

if(balance > 500)console.log("test"); // implicit scope


// nesting condition 

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged In");
}