const user = {
    username: "Akash",
    price: 999,

    welcomeMessage: function(){ // this is method
        console.log(`${this.username} , welcome to website`); // this is used 
        // to refer current context  
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log((this)); // in node global oject is empty object output is {} but in brower engine global object is window 

// function chai() {
//     let username = "Akash" // cant able to acess this inside funtion only able to acess inside objects

//     console.log(this.username);
// }

// chai()

// const chai  = function (){
//     let username = "Akash"
//     console.log(this.username); // similar to last one
// }

// chai()

const chai  =  () => {           // arrow funtion 
    let username = "Akash"
    //console.log(this.username); // give undefine output 
    console.log(this); // this will give empty object
}

//chai()

// const addTwo = (num1, num2) => {    // this is basic arrow function 
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 // ye implicit function hai matlab ek hi line ka satement 

const addTwo = (num1, num2) => ({user: "Akash"})

console.log(addTwo(5, 7));
