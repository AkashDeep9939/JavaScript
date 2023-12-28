let score = "33"

console.log(typeof score);
console.log(typeof (score)); // as a method passed

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0;

let isLoggedIn = 1; // ye true return kare ga or empty string "" ke liye false
// 1 => true , 0=> false , " " => false , "akash" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// more different type of conversion in js 

let someNumber = 33;

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

// ******************* Operation ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 power 2 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Akash"

let str3 = str1 + str2
console.log(str3)


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true); // output true
console.log(+true); // output 1


let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

