// Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// print all rest of the date string in js

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());

// more different syntax for date using yy-mm-dd format 

let myCreateDate2 = new Date("2023-01-14")
console.log(myCreateDate2.toLocaleString());

// time stap in js 

let myTimeStamp = Date.now()

console.log(myTimeStamp); // it give out put in millisecond
console.log(myCreateDate.getTime());

// convert there millisecond into second 

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay()); // 0 means sunday 

newDate.toLocaleString('default', {
    weekday: "long", 
})