// a used case is shared here to show how liabraries and frameworks are created.
// let myName = "akshay     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// bydefault property trueLength we want here.


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Adding function to an object prototype , so that it can be easily available
Object.prototype.akshay = function(){
    console.log(`akshay is present in all objects`);
}

Array.prototype.heyakshay = function(){
    console.log(`akshay says hello`);
}

// heroPower.akshay()
// myHeros.akshay()
// myHeros.heyakshay()
// heroPower.heyakshay()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // Teacher can access all the properties of user -- this is prototypal inheritance ---- aap kaise kisi aur ki properties ko access kar sakte ho

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

// we have created truelength method with the help of prototype and added it to the prototype
String.prototype.trueLength = function(){
    console.log(`${this}`); // this lega context jis ka 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"akshay".trueLength()
"iceTea".trueLength()
