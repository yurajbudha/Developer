// Decision making Statements
/**
 * a. If-esle 
 * b. Else-if 
 * c. Switch-case
 * 
 * d. Loops 
 *    i. do-while
 *    ii. while 
 *    iii. for 
 *    iv. for-in 
 *    v. for-of
 * 
 * TODO: Data 
 * .map(), .forEach(), .filter(), .reduce(), .some(), .every()
 */
// truthy value 
  // true, not null, non 0 numbers, defined variables, non empty variables 
// falsy value 
  // false, empty string variable, null, 0, undefined, any empty variables 

// let x = '';
// if (x) {
//   // body of if
// } 
// // else {
// //   // else body 
// //   // optional 
// // }

// if-else 

let day = "Friday";
// nesting 
if (day === "Sunday" || day === "Saturday") {
  // code block
  console.log("Holiday")
} else {
  if(day === "Friday") {
    console.log("Weekend")
  } else {
    console.log("Weekday")
  }
}

// Task: 1 
// Create a js variable called scoreObtained. 
// Assign a random number from 0 to 500
// Consider a total of 500 and find percentage and division based on percentage
// percentage = scoreObtained/total * 100
// The criteria of getting division is: 
// If percentage is greater than or equal to 80 ====> Distinction
// If percentage is greater than or equal to 60 but less than 80 => First Division
// If percentage is greater than or equal to 45 but less than 60 => Second Division
// If percentage is greater than or equal to 32 but less than 45 => Third Division
// If percentage is less than 32 => Sorry! You are failed.

const scoreObtained = 320;
const total = 500; 
const percentage = scoreObtained/total * 100;


if(percentage >= 80) {
  console.log("Distinction")
} else {
  if(percentage >= 60) {
    console.log("First Division")
  } else {
    if(percentage >= 45) {
      console.log("Second Division")
    } else {
      if(percentage >= 32) {
        console.log("Third Division")
      } else {
        console.log("Sorry! You are failed!")
      }
    }
  }
}



if (percentage >= 80) {
  console.log("Distinction");
} else if (percentage >= 60) {
  console.log("First Division");
} else if (percentage >= 45) {
  console.log("Second Division");
} else if (percentage >= 32) {
  console.log("Third Division");
} else if(percentage < 32){
  console.log("Sorry! You are failed!!")
}


// HW
// Create a js variable to store units of electricity consumed (350)
// Calculate the total bill amount to be paid if, 
// for the first 20 units a lumpsum amount of Npr. 80 
// For the next 20 units, a rate of Npr. 4/unit 
// For the next 30 units, a rate of Npr. 5.5/units
// For the next 50 units, a rate of Npr. 7/units
// For the next 100 units,a rate of Npr. 10/units
// for the next 100 units, a rate of Npr. 12/units, 
// any above these, a rate of Npr. 20/units


// 350 => units 
// 20 => 80 rs  (330)
// 20 => 4 * 20 (310)
// 30 => 5.5 * 30 (280)
// 50 => 50 * 7 (230)
// 100 => 10 * 100 (130)
// 100 => 12 * 100 (30)
// 40 => 20 * 30
// ---------------> 3475

let unitsConsumed = 350; 
let billAmt = 0;

if(unitsConsumed <= 20) {
  billAmt = 80
} else if(unitsConsumed <= 40) {
  billAmt =  80 + (unitsConsumed - 20) * 4
} else if(unitsConsumed <= 70) {
  billAmt = 80 + 20 * 4 + (unitsConsumed-40) * 5.5
} else if(unitsConsumed <= 120) {
  billAmt =  80 + 20 * 4 + 30 * 5.5 + (unitsConsumed-70) * 7
} else if(unitsConsumed <= 220) {
  billAmt = 80 + (20 * 4) + (30 * 5.5) + (50 * 7) + (unitsConsumed-120) * 10
} else if(unitsConsumed <= 320) {
  billAmt = 80 + 20 * 4 + 30 * 5.5 + 50 * 7 + 100 * 10 + (unitsConsumed - 220) * 12;
} else {
  billAmt =
    80 + 20 * 4 + 30 * 5.5 + 50 * 7 + 100 * 10 + 100 * 12 + (unitsConsumed - 320) * 20;
}

console.log(billAmt)

day = "SUNDAY"

day = day.toLowerCase()     // covert to lowercase
if(day === "saturday" || day === "sunday") {
  console.log("Holiday")
}

switch(day) {
  case "sunday":
  case "saturday":
    console.log("Holiday")
    break;
  case "friday": 
    console.log("WeekEnd")
    break;
  default:    // optional
    console.log("Weekday")
    break;      // optional
}


// switch("sunday") {
//   case "sunday":
//     console.log("Holiday")
//     break;
// }




if (percentage >= 80) {
  console.log("Distinction");
} else if (percentage >= 60) {
  console.log("First Division");
} else if (percentage >= 45) {
  console.log("Second Division");
} else if (percentage >= 32) {
  console.log("Third Division");
} else if (percentage < 32) {
  console.log("Sorry! You are failed!!");
}


switch(true) {
  case (percentage >= 80): 
    console.log("Distinction")
    break;
  case (percentage >= 60):
    console.log("First Division")
    break;
  default:
    // block 
    // break
}


// Loop / Iteration / Repeate
// do-while
// while 
// for 
  // for-in 
  // for-of

  