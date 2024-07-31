const name = "Krishnendu"

const repo_count = 25

//console.log(name + " " + repo_count) 

console.log(`hello my name is ${name} and my repo count is ${repo_count}`)

const name1 = new String("Krish")

console.log(name1.toUpperCase())
console.log(name1.charAt(3)) //charecter at index

console.log(name1.indexOf('h')) // index of a character

const name2 = name1.substring(0,3) // substring
console.log(name2)

const name3 = name1.slice(-3,4) // slice
console.log(name3)


const name4 = "   krish    "
console.log(name4)
console.log(name4.trim())


const url = "https://github.com/kbarman%201015"

console.log(url.replace('%20',''))