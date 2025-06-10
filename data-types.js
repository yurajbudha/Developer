/**
 * Primitive 
 * * Text/String 
 * * Number 
 * * Boolean
 * * Null 
 * * Undefined 
 * * Symbol
 * 
 * Derived 
 * * Array 
 * * Object/JSON
 * * function
 */

// text 
let a = '123'
let b = "123"
let c = `Sandesh Bhattarai`

console.log(typeof a)
console.log(typeof b);
console.log(typeof c);

let d = 123
let e = 1.234
let f = 12e34
let p = NaN   // number, Not a Number

console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

let g = true; 
let h = false; 
console.log(typeof g);
console.log(typeof h);

let i = null;
console.log(typeof i )      // object 

let j; 
console.log(typeof j)       // undefined 

// loosely coupled 
// let k: number = 123


let k = Symbol()          // obj
console.log(typeof k)

// collection of data Separated by comma stored in index-value pair enclosed by []
      //[0, 1, 2, 3, 4,  5,  6,    7]
let l = [1, 2, 3, 4, 5, true, null, "a"];    

console.log(typeof l)     // object
console.log(l[5])     // true

// single dimensional
  // array contains non array elements  
// multi dimensional 
  // array contains atleast one array or derived values 

let m = {}

let user = {
  name: "Sandesh Bhattarai",
  email: "sandesh@broadwayinfosys.com",
  address: "Kathmandu",
  phone: 9876543210,
}

console.log(user.name);
console.log(user['email']);

let allUsers = [
  {name: "User One", email: "one@user.com", address: "Kathmandu", phone: 9876543210},
  {name: "User Two", email: "two@user.com", address: "Lalitpur", phone: 9876543458},
  {name: "User Three", email: "three@user.com", address: "Bhaktapur", phone: 9876543210},
]

// JSON. serialize, csv

// console.log(typeof allUsers)    // object 
// console.log(Array.isArray(allUsers))

// console.log(allUsers)
// const jsonData = JSON.stringify(allUsers)
// console.log(typeof jsonData)


console.log(allUsers[0].name);
console.log(allUsers[0]['email']);
// allUsers[0]

const n = () => {}
const o = function() {}

console.log(typeof n);
console.log(typeof o);


let varname      // undefined 