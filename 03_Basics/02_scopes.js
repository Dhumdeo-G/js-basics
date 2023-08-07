//   {} --- scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "akshay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "akshay"
    if (username === "akshay") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // there is no error here

function addone(num){  // functions 
    return num + 1
}



addTwo(5)   // it will throw an error, as you are holding that function inside another variable
const addTwo = function(num){  // function expression 
    return num + 2
}
