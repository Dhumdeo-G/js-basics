const name = "Akshay"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akshay-go-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Akshay    "
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "https://Akshay.com/Akshay%20go"

console.log(url.replace('%20', '-'))
console.log(url);

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
