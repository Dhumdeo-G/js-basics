// ES6

class User {  // ab hame object or function ko use karne ki jarurat nahi hai new keyword ke sath, we have class now
    // jab bhi ham new keyword use karenge , tab ham uske constuctor ko call karenge i.e constuctor automatically call ho jayega
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){ // jaise ye class ke andar aa gaya, ab hame iske liye function keyword likhane ki koi jarurat nahi hai, function keyword yaha par ham use kar bhi sakte hai ya nahi bhi for methods.
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
// mast hai ye video
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// with prototype we are creating generalise function
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());