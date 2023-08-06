// functions definition
// function keyword    --- function Name --- () --- {scope}
function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");
}
// sayMyname --- function reference
// sayMyname() --- to execute function -- function execution
// sayMyName()

// function addTwoNumbers(number1, number2){  // parameters , at the time of function definition

//     console.log(number1 + number2);
// }
// addTwoNumbers(4,5) -- arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // to get values from function , function needs to return something , so we need to use return statement here. 

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){  // default value we are passing here 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// IMP concept 
// console.log(loginUserMessage("akshay"))
// console.log(loginUserMessage("akshay")) // overwritting the default value

//rest Opeartor 
// you don't know about the number of arguments you are passing 
// ... --- remaining values you are passsing as an argument here in form of an array [500,2000]
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// passing object as an argument
const user = {
    username: "akshay",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
