//Array specific loop
// for of loop

// ["", "", ""]
// [{}, {}, {}]  // array of an objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // const variable of Array/string
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// Map will give you new Array
// it maintained the order of insertion
// key - value
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // destructuring of a map
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // you can not iterate object with for of loop 
//     console.log(key, ':-', value);
    
// }