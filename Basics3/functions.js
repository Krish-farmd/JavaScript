function print(result){
    console.log(result)
}

//print(`The addition of 3 + 3 is ${3+3}`)

function add_numbers(num1, num2){
    return num1 + num2
}

//print(`The addition of 3 + 5 is ${add_numbers(3,"p")}`)

function login_user_messeage(user){
    if (user === undefined){
        print("Please provide user name")
        return "Please provide user name"
    }   
    return`Welcome ${user}`
}

//print(login_user_messeage())


function calculate_cart_price(...num1){ // Rest operator
    return num1
}

print(calculate_cart_price(1,2,3,4,5,6))

const user = {
    username: "Krishnendu",
    price: 200
}

function handle_object(any_object){
    print(`Username is ${any_object.username} and price is ${any_object.price}`)
}

handle_object(user)

const my_new_arary_ = [44,44,44,45]

function handle_array(any_array){
    print(`The sum of array is ${any_array.reduce((a,b) => a+b,0)}`)
}
handle_array(my_new_arary_)