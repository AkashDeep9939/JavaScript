// objects are declare in two ways  1) literal 2) constructor
// singleton  => if we make oject using constructor it is singleton
// in literols no sigleton 

// 1) object literal 

const mySym = Symbol("Key1")

const jsUser = {
    name: "Akash",
    "full name": "Akash Deep",
    [mySym]: "mykey1", // symbol use in square bracket
    age: 18,
    location: "Dhanbad",
    email: "akash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}

console.log(jsUser.name);
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "akash@openAI.com";
// Object.freeze(jsUser)
jsUser.email = "akashDeep@hsbc.com"

jsUser.gretting = function(){
    console.log("Hello Js user");
}

jsUser.grettingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.gretting()); // function not execute in output it only return function refrence
console.log(jsUser.grettingTwo())