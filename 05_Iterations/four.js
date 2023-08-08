const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop works properly for an object
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
// for in loop also works for Arrays , but it takes 0,1,2 --- as a key
// whereas for of loop directly takes a values from an Array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// Map is not iterate by this way using for in 