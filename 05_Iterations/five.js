// High order Array Loop
// forEach   -- by default it is assign for an Array
const coding = ["js", "ruby", "java", "python", "cpp"]
// callback function dosen't have name
// coding.forEach( function (val){  // val/item --- act as a parameter and takes each value/item of an array
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //Note:  we are giving reference of function here, we are not calling that function , so no paranthesis

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// Array of objects ---- forEach we use generally 
// mostly we get the values from Database in this format
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )