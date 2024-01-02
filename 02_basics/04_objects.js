const tinderUder = new Object () // singleton object
const tinderUder2 = {} // non singleton user

 tinderUder.id = "123abc"
 tinderUder.name = "Sammy"
 tinderUder.isLoggedIn = false

//  console.log(tinderUder0);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Akash",
        lastname: "Deep"
    }
}

// console.log(regularUser.fullname.firstname.lastname);

// cobine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3); it give output of objects of objects 

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// using spread operator 

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const user = [
    {
        id: 1,
        email: "ak@gmail.com"
    },

    {
        id: 1,
        email: "ak@gmail.com"
    },

    {
        id: 1,
        email: "ak@gmail.com"
    },

    {
        id: 1,
        email: "ak@gmail.com"
    }
]

user[1].email
console.log(tinderUder);

console.log(Object.keys(tinderUder));
console.log(Object.values(tinderUder));
console.log(Object.entries(tinderUder)); // show key valye pair in arrays
