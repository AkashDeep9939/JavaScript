// for of  ye sab array specific loop hai 

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetigs = "Hello world"

// for (const great of greetigs) {
//     console.log(`Each char is ${great}`);
// }

// Map 

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

// loop in map 

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObjects = {
    'game': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObjects) {
//     console.log(key, ':-', value);           // ye kaam nhi kare ga object mai iterate kerne ke liye
// } 

