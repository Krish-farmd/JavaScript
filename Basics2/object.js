// Singleton Object , Object.create

//Object Literal

const my_sym = Symbol("key1")


const js_user = {
    name: "Krishnendu",
    [my_sym] : my_sym, // Any symbol type data should keep in [], and also can be accessed using []
    age: 24,
    email: "krish@gmail.com",
    location: "Udaipur",
    is_logged_in: true,
    last_login: ['Monday', 'Tuesday', 'Wednesday']
}

//console.log(js_user.email)
//console.log(js_user['email'])
//console.log(typeof js_user[my_sym])

//Object.freeze(js_user) // immutable object
//console.log(js_user)

js_user.greeting = function(){ // 1. add new property
console.log("Hello Krishnendu! Welcome to JavaScript")
}

js_user.greeting2 = function(){ // 1. add new property
console.log(`Hello ${this.name} Welcome to JavaScript`)
}

//console.log(js_user.greeting())
//console.log(js_user.greeting2())

const tinder_user = {}

tinder_user.name = "Krishnendu";
tinder_user.age = 24;
tinder_user.email = "krish@gmail.com"
tinder_user.location = "Udaipur",
tinder_user.is_logged_in = true,
tinder_user.last_login = ['Monday', 'Tuesday', 'Wednesday']

//console.log(tinder_user)

const obj = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = Object.assign({}, obj, obj2)

//console.log(obj3)

const obj4 = {...obj, ...obj2}

//console.log(obj4)

const users = [{
name: "Krishnendu",
age: 24,
email: "krish@gmail.com",
location: "Udaipur",
is_logged_in: true,
last_login: ['Monday', 'Tuesday', 'Wednesday']
},
{
name: "Krish",
age: 24,
email: "krish@gmail.com",
location: "Udaipur",
is_logged_in: true,
last_login: ['Monday', 'Tuesday', 'Wednesday']}]

//console.log(tinder_user)
//console.log(Object.keys(tinder_user)) // arrays of keys
//console.log(Object.values(tinder_user))  // arrays of values

//console.log(Object.entries(tinder_user)) // arrays of key value pairs [[key, value], [key, value]]

//console.log(tinder_user.hasOwnProperty("age"))

const course = {
    course_name: "JavaScript",
    course_fee: 2000,
    course_language: "English",
    course_type: "full time",
    course_instructor: "Krishnendu"
}

const {course_instructor: instructor} = course // if "instructor" is same as "course_instructor" then we can use shorthand

console.log(instructor)

