function print(result){
    console.log(result)
}

// if

//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        print("January")
        break;
    case 2:
        print("February")
        break;
    case 3:
        print("March")
        break;
    case 4:
        print("April")
        break;
    default:
        print("Invalid month")
        break;
}

// Truthy and Falsy values

const email = "krish@gmail"

if(email){
    print("Email is valid")
}else{
    print("Email is invalid")
}

// Flasy    values
// false, 0, -0, BigInt 0n, "", '', `` , null, undefined

// Truthy values
//true, 1, -1, BigInt 1n, "Krishnendu", " ", ` `, Symbol(), [], {}, 'flase'function(){}

const empty_object = {}

if (Object.keys(empty_object).length === 0){
    print("Object is empty")
}else{
    print("Object is not empty")
}


/// Nullish Coalescing Operator

const name = undefined ?? "Krishnendu"
print(name)

// Ternary Operator
// operation ? true : false

