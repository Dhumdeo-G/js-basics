// object literal ----  object
const user = {
    username: "akshay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  // this talks about the current context.
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // this this gives you {} - as there is nothing in the current context i.e. global context 
// in browser -- this context will give you the window global object.

// this represents current context ,here ,context of function
function User(username, loginCount, isLoggedIn){
    this.username = username; // variable = passedvalue
    // myusername = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  // the object , the context, which we are using we are returning here
}

// with new keyword , aap ek hi object se multiple instances bana sakte ho, one instance one memory space 
const userOne = new User("akshay", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// here userTwo overwrites the value of userOne.
console.log(userOne.constructor);
//console.log(userTwo);
