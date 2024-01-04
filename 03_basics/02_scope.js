//var c = 300

let a = 300; // this is global scope 

if (true){
    let a = 10
    const b = 20
    console.log("INNER", a); // this is block scope
} // scope

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Akash"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true) {
    const username = "Akash"
    if (username === "Akash"){
    const website = "youtube"
    console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++++++ Intresting +++++++++++++++++++++++++++++

console.log(addone(5)); // here we can acces this function 

function addone(num) { // this type of declation called function in js 
    return num+1;
}

addone(5) // we can execute this function before its declaration 

console.log(addTwo(5)); // here exits concept of hoeisting 

const addTwo = function(num){  // this type of declaration of function called expression 
    return num + 2
}

addTwo(5) // in this case we are not table this access this function befrore its 
// declaration 