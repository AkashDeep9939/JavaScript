// array 

const myArray = [0,1,2,3,4,5]

const myHeros = ["Akash", "Deep"]


console.log(myArray)

console.log(myArray[1])

console.log(myHeros[0])

// metod in array

myArray.push(6);
console.log(myArray)

myArray.pop();

myArray.unshift(9);
console.log(myArray)

// shift remove first element from array
myArray.shift();
console.log(myArray)

// check 9 in array or not output in true or false

console.log(myArray.includes(9));

console.log(myArray.indexOf(2));

const newArray = myArray.join() // copy myArray into newArray type of string

console.log(newArray);

console.log(typeof(newArray));

// slice , splice

console.log("A ",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);

console.log("B ", myArray)

const myn2 = myArray.splice(1,3)

console.log("c ", myArray);
console.log(myn2);

