// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

// below we are using object literals
const JsUser = {
    name: "Akshay",
    "full name": "Akshay Gobare",
    [mySym]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "akshay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // this is another way to get vlaues from objects in JS 
// console.log(JsUser["full name"]) // it is usefull to get values , when key is like combination of strings or symbols.
// console.log(JsUser[mySym])  // to get the values from symbol we need to use this

JsUser.email = "akshay@chatgpt.com"  // here overwritting the values of email id.
// Object.freeze(JsUser)  // you are not able to change the value of it
JsUser.email = "akshay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); 
console.log(JsUser.greeting); // here reference is taken of that function
console.log(JsUser.greetingTwo()); // extra undefined is there