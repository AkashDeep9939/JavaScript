
function sayMyName(){
 console.log("H");
 console.log("I");
 console.log("T");
 console.log("E");
 console.log("S");
 console.log("H");
}

//sayMyName() // sayMyName is without () is refrence with sayMyName() is exection

// add two number function 

// function addTwoNumber(number1, number2){ // parameter
//     console.log(number1 + number2);
// }

function addTwoNumber(Number1, Number2) {
    
    let result = Number1 + Number2
    return result
}

const result = addTwoNumber(3, 4) // arguments

console.log(`Result ${result}`)

function loginUserMessage(username = "sam"){
    if(!undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Akash"))

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Akash",
    price: 199
}

function handleObject(anyObject){
    console.log(`Ussename name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

// pass array in function 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

