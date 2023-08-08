const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map always return something
// can be use for iteration , like forEach
// const newNums = myNumers.map( (num) => { return num + 10})

// chaining --- 2-3 methods we are using at a time
// jab bhi chaining hogi uska result second method me pass hoga
// there is no limit for chaining
const newNums = myNumers   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                .map((num) => num * 10 )  // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (num) => num + 1)  // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                .filter( (num) => num >= 40)  // [41, 51, 61, 71, 81, 91, 101]

console.log(newNums); 