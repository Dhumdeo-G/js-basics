// values considered as true or false according to the variables having/holding values

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {  // array need to be check with length
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // checking for an empty object
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// values coming from database are handled over here , at the time of assignment  --- we check values
// agar error aate hai or null value aati hai or undefined value aati hai , then agar hum koi dusari value assign karna chahte hai , we use this , its like a check 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false
// condition ? statement if true : statement if false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")