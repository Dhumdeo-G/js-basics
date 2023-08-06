// const tinderUser = new Object()  // singleton 
const tinderUser = {}              // using literals 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akshay",
            lastname: "gobare"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // object nesting
// console.log(regularUser.fullname?.userfullname.firstname); // acts like check for the value

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // combine different object and gives us key value
// {} -- act as target object, otherwise obj1

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//Array of objects you are getting from Database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // in return you get Array i.e list
// console.log(Object.values(tinderUser)); // array in return
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether key exist or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akshay"
}

// course.courseInstructor  // this is destructuring of an object.

const {courseInstructor: instructor} = course  //this is destructuring of an object.  // instread of courseInstructor we are goin to use instructor now onwards.

// console.log(courseInstructor);  //this is destructuring of an object.
console.log(instructor);  // this is destructuring of an object.


//JSON    //
// {
//     "name": "akshay",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]