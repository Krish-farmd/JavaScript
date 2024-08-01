function print(result){
    console.log(result)
}

// Immediately invoked function expression
(function chai () {
    print("DB connected")
})(); // () () are called Immediate invokation of the function 
// this is used many times in the project to get rid off the polution from the global variable
//This time we need a ; to end the function

(() => {
    print("DB connected two")
})();