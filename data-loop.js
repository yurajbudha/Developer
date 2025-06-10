// array and objects + loop 
let students = []

// 
let std1 = {
  name: "Aarron Shrestha",
  address: "Kathmandu",
  email: "aarron@broadwayinfosys.edu.np",
  phone: 9876543210,
  group: "MERN",
  session: "8AM"
}
let std2 = {
  name: "Aashray Shakya",
  address: "Lalitpur",
  email: "aashray@broadwayinfosys.edu.np",
  phone: 9879098789,
  group: "MERN",
  session: "8AM",
};
// array data insert 
// array last 
// console.log(students)
students.push(std1, std2)   // 0 index, 1 index
// console.log(students);

// [0, 1, 2]
// array top 
let std3 = {
  name: "Bhim Bahadur Kunwar",
  address: "Bhaktapur",
  email: "bhimbahadur@broadwayinfosys.edu.np",
  phone: 9876576543,
  group: "MERN",
  session: "8AM",
};
students.unshift(std3)      // at 0 index
// console.log(students);

// [0,1,2]
// at any position
let std4 = {
  name: "Khyam Raj Adhikari",
  address: "Kathmandu",
  email: "khyamraj@broadwayinfosys.edu.np",
  phone: 9809988098,
  group: "MERN",
  session: "8AM",
};
// [0,1,2] ==splice=> [0,1,2,3]
students.splice(1, 0, std4)
// console.log(students)

let std5 = {
  name: "Muskan Siddiqui",
  address: "Kathmandu",
  email: "muskan@broadwayinfosys.edu.np",
  phone: 9876543456,
  group: "MERN",
  session: "8AM",
};
// [0,1,2,3]
students[4] = std5
// console.log(students)


// 
// const popData = students.pop()  // last element of the array
// const firstElem = students.shift()  // array first element remove and return 
// const index1 = students.splice(1, 1);  // remove and returns the value of 1 index data
// 0,1,2,3,4
// const index  = students.slice(1, 2)

let size = students.length;
// console.log(students)
for(let i = 0; i< size; i++) {
  console.log("Name: ", students[i].name);
  console.log("Adderss: ", students[i].address);
  console.log("Email: ", students[i].email);
  console.log("Phone: ", students[i].phone);
  console.log("Group: ", students[i].group);
  console.log("Session: ", students[i].session);
  console.log("************************************************");  
}

// i++;      // 1

// Task:
// Create a js Variable called students and assign some students to the array .
// A student should contain, name, school, scoreObtained(below 500)
// Calculate each student's percentage and division based on the percentage. 
// 