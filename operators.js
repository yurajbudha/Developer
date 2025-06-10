// /**
//  * a. Mathematical or Arithematic Opertos 
//  *  +, -, *, /, %, 
//  *  ++,--
//  * b. Assignment Operators 
//  *  =, +=, -=, *=, /=, %=
//  * c. String/concatination Operators
//  *   +
//  * d. Comparision Operators 
//  *    <, >, <=, >=, ==, !=, ===, !==
//  * e. Logical Operators 
//  *    &&, ||, !
//  * f. Conditional operators 
//  *    (expression) ? true : false 
//  * g. Nullish colleaching Operators
//  *    (value) ?? defaultValue
//  * h. Template literals 
//  *    `${js parsing}`
//  * i. Object/Array desctructure 
//  * j. Spread and Rest 
//  *    ... 
//  */

// let a = 10;
// let b = 3;

// console.log(a + b);     // 13
// console.log(a - b);     // 7
// console.log(a * b);     // 30
// console.log(a / b);     // 3.33333333333334
// console.log(a % b);     // 1

// // a = 10
// ++a;    // a = a + 1
// console.log(a)          // 11
// a++   // a = a + 1
// console.log(a)          // 12

// // a = 12
// console.log(a++);       // 12     // post assign
// // console.log(a)       // 13
// console.log(++a);       // 14     // pre assign 


// let c = 10;
// // c = c + 5
// c += 5
// console.log(c)      // 15

// c -= 5;
// console.log(c)        // 10

// c *= 5;
// console.log(c)        // 50

// c /= 5;
// console.log(c)        // 10

// c %= 5;
// console.log(c)        // 0 


// let x = 10;
// let y = '10'

// let z = x + y 
// console.log(z)      // 1010

// console.log("The value of z is", z)

// console.log(x < y);           // false
// console.log(x > y);           // false
// console.log(x <= y);          // true
// console.log(x >= y);          // true
// console.log(x == y);          // true
// console.log(x != y);          // false
// console.log(x === y);         // false
// console.log(x !== y);         // true


// console.log(x < y && x >= y && x == y);
// // false && true && true
// console.log(x < y || x >= y || x === y);
// // false || true || false

// console.log(!(x < y))
// // !false => true 
// // !true => false

// // let result = (true === true) ? "this is true" : "this is false";
// let data = {
//   name: ""
// }

// // let name = data.name ? data.name : null

// let name = data.name ?? null

// let userInfo = {
//   name: "Sandesh",
//   email: "sandesh@broadwayinfosys.com",
//   address: "Kathmandu",
//   role: "Trainer",
//   phone: 9876543210
// }

// // const phone= userInfo.phone
// // const role = userInfo.role
// const {phone, role} = userInfo

// // let template = 'Dear '+userInfo.name+", Your account with an email "+userInfo.email+" has been registered successfully. Please verify your address "+userInfo.address+" if is correct or not."
// let template = `Dear ${userInfo.name}, 
// Your account with an email ${userInfo.email} has been registered successfully. 
// Please verify your address ${userInfo.address} is if correct or not. 
// `
// console.log(template)


// let userNames = ["Sandesh", "Bhattarai", "User"]

// // let firstName = userNames[0]
// // let lastName = userNames[1]
// // destructure
// let [firstName, lastName] = userNames

// console.log(firstName);
// console.log(lastName);

// let user = {
//   name: "Sandesh Bhattarai",
//   email: "sandesh@broadwayinfosys.com", 
//   address: "Kathmandu",
//   phone: 9876543210, 
//   organization: "Broadway Infosys",
//   skills: ["JS", "PHP","HTML", "CSS"]
// }


// // let phone = user.phone
// // let organization = user.organization
// let {phone: phoneNumber, organization, skills:[skill1, skill2, skill3] } = user;

// console.log(phoneNumber)
// console.log(skill1)   // JS
// console.log(skill2)   // PHP
// console.log(skill3)   // HTML
// // skills array 
// // skills , js, php, html 


let userInformation = {
  name: "Sandesh Bhattarai",
  email: "sandesh@broadwayinfosys.com",
  address: "Kathmandu",
  phone: 9876543210,
  organization: "Broadway Infosys",
  skills: ["JS", "PHP", "HTML", "CSS"],
};



let {phone, organization, ...other} =  userInformation



// let userObj1 = userInformation
let userObj1 = {
  ...userInformation          // spread 
};

console.log(userObj1)

userObj1.name = "Updated Username"
console.log(userObj1);

console.log(userInformation)    // name 



// bit 
// 1 & 0
// 1 | 0

// 4 & 5
// 0010
// 0011
// ------
// 0011   => 5