const name = "Akash"
const repoCount = 50

// console.log(name + repoCount + " Vlaue");  this syle of concanating string is not recommende old fashion 

console.log(`Helllo my name is ${name} and my repo count is ${repoCount}`) // string interpolation 

// new syntax to declare string using objects

const gameName = new String('Akash-Deep-Singh')

console.log(gameName[0]);
console.log(gameName.__proto__);

// few method of string

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

 const newString = gameName.substring(0,3) 
 console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringtwo = "          Akash      "
console.log(newStringtwo);
console.log(newStringtwo.trim());

const url = "https://akash.com/akash%20deep"

console.log(url.replace('%20', '-'))

console.log(url.includes('akash'))

console.log(gameName.split('-'));

