function print(result){
    console.log(result)
}


const user = {
    username: "Krishnendu",
    price: 200,
    welcome_message: function(){
        print(`Welcome ${this.username}, happy to serve you`)
        print(this)
    }
}

// print(user.welcome_message())
// user.username = "Himanshi"
// print(user.welcome_message())

// print(this) // Will return  {} => which is a empty parenthesis
// In case of browser ther we will find the Window fuction which will return the window object  



// function chai(){
//     let username = "Krishnendu"
//     print(this.username)
// }

// chai()

// const chai = function (){
//     let username = "Krishnendu"
//     print(this.username)
// }

// chai()

//Another Way

const chai = () => {
    let username = "Krishnendu"
    print(this.username)
}


// const addtwo = (num1 , num2 ) => num1 + num2

// const addtwo = (num1 , num2 ) => num1 + num2 //Implicit return

const addtwo = (num1 , num2) => (num1 + num2) // Good prctice to use first brakets (best usecase in case of returning object)

print(addtwo(3,4))



