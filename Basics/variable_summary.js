// Primitive

// 7 types: String, Number, BigInt, Boolean, Undefined, Null, Symbol (to make unique)



//Reference (Not Primitive)

// Array, Object, Function


//Some other tyme
//WeakMap, WeakSet, Proxy, TypedArray, Error, ArrayBuffer, DataView

//Symbol

const id = Symbol("123")
const another_id = Symbol("123")

console.log(id == another_id) // False


// Non-Primitive

const heros = ['shaktiman', 'hulk', 'thor','ironman']

let my_object = { // object
    "name": "Krish",
    "age": 24,
    "heros": heros
}

const my_function = function(){ // type ==> object fuction
    console.log("I am a function")
}

// URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures