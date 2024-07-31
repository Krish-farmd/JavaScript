//array

const my_array = [1,2,3,4,5,6,7,8,9,10]

const my_heros = ['shaktiman', 'hulk', 'thor','ironman']

// Array method

//my_array.push(11)
//console.log(my_array)

const dc_heros = ['superman','batman','wonderwoman','aquaman']

//my_heros.push(dc_heros)
//const all_heros = my_heros.concat(dc_heros)
//console.log(all_heros)

const all_new_heros = [...my_heros, ...dc_heros]
//console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]]

const real_array = another_array.flat(Infinity)
//console.log(real_array)

 console.log(Array.from("Krishnendu")) // 1D array ['K','r','i','s','h','n','e','n','d','u']
 console.log(Array.of(1,2,3,4,5,6,7,8,9,10)) // 1D array [1,2,3,4,5,6,7,8,9,10]
