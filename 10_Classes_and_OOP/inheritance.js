class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// child extends parents
// ab aapke pass user ki functionality available hai , as aapne extend(inherit) kiya hai isko.
class Teacher extends User{
    constructor(username, email, password){
        super(username) // in the place of super ham pehle call() wala function use karte the 
        // but ab hamne extend kiya hai user ko, to ab ham super keyword ko use karenge yaha par and that is going to take care of everything, 
        // here , username -- ka khayal rakhega super and extend keyword
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
// yaha par ham check karte hai ki kya chai instance user/Teacher ka? -- yes 
console.log(chai instanceof User);