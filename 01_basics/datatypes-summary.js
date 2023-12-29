// there are two types of data in js premitive and non-primitive 
// data types are how they kept in memory  and fetch it 

// Primitive : there are call by value data mean change in actual data 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Pefrence Data type (Non Primitive) => refrence creaate in memory
// Array, Objects, Function 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // these two symbos is different not same

console.log(id === anotherId); // output false

const bigNumber = 345678969421n

const heros = ["shaktiman", "naagraj", "doga"]; // this is how array declare in js 

let myObj = {
    name: "Akash", // this is a boject in js which store key value pair
    age: 22,
}

const myFunction = function (){
    console.log("Hello world");
}

// console.log(typeof bigNumber);

console.log(typeof heros); // non primiive typeof is object 







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let mySecondName = "AkashDeepSingh"

let anotherName = mySecondName
anotherName = "MrDeep"

console.log(mySecondName);
console.log(anotherName);

let userOne = {
    email: "akashdeep@gmail.com",
    upi: "akdp@okicici"
}

let userTwo = userOne;

userTwo.email = "adpd@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

