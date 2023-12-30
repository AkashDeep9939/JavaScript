const score = 400
console.log(score);

// explict define data type in js 

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths library +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))


console.log(Math.min(1,2,3,4,6,78,9));
console.log(Math.max(9,3,6,4,3));

// math random give in mange of 0 to 1
console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


