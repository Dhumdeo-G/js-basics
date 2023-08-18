// ham nahi chahate ke koi directly access kare user  ki properties ko 
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
// jitne bhi aap properties banate ho , unke naam se already getter & setter as a method ban jaate hai.
// get = getter

// class ke bahar se koi value get karna chahte ho , isliye getter hota hai
    get email(){
        return this._email.toUpperCase()
    }
    // class ke andar koi value set karna chahte ho isliye setter hota hai
    // set parameter lega , which needs to be set
    set email(value){
        this._email = value
    }
    // a new property/variable is created with _ to get and set property.
    // here name of the property we need to use is same with getter and setter
    get password(){
        return `${this._password}akshay`
    }

    set password(value){
        this._password = value
    }
}

const akshay = new User("h@akshay.ai", "abc")
console.log(akshay.email);