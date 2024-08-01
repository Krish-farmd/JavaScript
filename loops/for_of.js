function print(result){
    console.log(result)
}

// const array = [1,2,3,4,5,6,7,8,9,10]

// for (const element of array){
//     print(element)
// }

// const greet = "welcome Krishnendu"

// for (const letter of greet){
//     print(`Letters of greet are : ${letter}`)
// }


// +++++++++++++++++Map+++++++++++++++++++

const map = new Map()
map.set('IN', 'INDIA')
map.set('US', 'UNITED STATES')
map.set('FR', 'FRANCE')

// print(map)

// for (const [key,value] of map){
// print(`${key} : ${value}`) 
// }

// Object is not iteratable directly


// +++++++++++++++++Loop on Object+++++++++++++++++++


const lang = {
    js : "JavaScript",
    py : "Python",
    java : "Java",
    c : "C",
    cpp : "C++"
}

for (const key in lang){  // for object of is does not works
    // print(`${key} : ${lang[key]}`) 
}

// in for loop pick the key of the array (stating from 0) or objects (customable)

// ++++++++++++=++Array injected loop+++++++++++++++++

const coding = ["js", "py", "java", "c", "cpp"]

// coding.forEach(function name(item) {print(item)})

// coding.forEach((item)=> print(item))

// coding.forEach(print)

// coding.forEach((item,index,arr) => print(`${index} : ${item}`))


const codes = [
    {
        name : "Krishnendu",
        age : 24,
    },
    {
        name : "Krish",
        age : 23
    },
    {
        name : "Krishna",
        age : 22
    },
    {
        name : "Kr",
        age : 21
    }
]

// codes.forEach((item) => {
//     print(`${item.name} : ${item.age}`)
// })

 
