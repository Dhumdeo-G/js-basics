const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()// vapas late waqt aapane usko bich me hi change kiya
    },
    // its not acting like a method , its like a property which we are overwritting
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)  // this is the factory function
// if new keyword is used over here , then it is constuctor function
// new user()
console.log(tea.email);

// _ defines mainly private property