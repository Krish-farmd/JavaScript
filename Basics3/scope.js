function print(result){
    console.log(result)
}

let a = 10  
const b = 20
var c = 30

//{} => This is the scope of the program // The scope will change with new {}

if (true){
    let a = 100
    const b = 200
    var c = 300 // var is in global scope`
    // print(`The value of a is ${a}`)
    // print(`The value of b is ${b}`)
    // print(`The value of c is ${c}`)
}

//print(`The value of a is ${a}`)
//print(`The value of b is ${b}`)
//print(`The value of c is ${c}`)

function one(){
    const user_name = "Krishnendu"

    function two(){
        const website = "Youtube"
        print(`Hello ${user_name}`)
    }
    // print(website)

    // two()
}

// one() 

// This scope features are also applicable for if else statements as well.

print(addone(3))
function addone(num){  // Orinary fuction setup 
    return num + 1 //can be accesible from anywhere in the code
}

const addtwo = function (num){ // Function as expression, which can be only accessible of the declaration
    return num + 2 // can't be accesible from anywhere in the code, only afte the declaration
} 