// Stack Memory (Premetive), Heap Memory (Non-Primitive)

let name = "Krish"

let another_name = name

console.log(another_name)

name = "Krishnendu"

another_name = name

console.log(another_name)


// Heap stores the address of the object
let obj_1 = {
    name: "Krish",
    email: "krish@gmail.com",
    age: 24
}

let obj_2 = obj_1

obj_2.email = "kbarman1015@gmail.com"

console.log(obj_1.email)
console.log(obj_2.email)