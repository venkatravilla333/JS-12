

// // let obj = {}
// // console.log(obj)

// // let myMap = new Map()
// // console.log(myMap)


// let obj = {
//   name: 'sachin',
//   age: 40
// }
// console.log(obj)

// let myMap = new Map([["name", 'sachin'], ['age', 40]])
// console.log(myMap)

// //how to add new value

// obj.color = 'red'
// console.log(obj)

// myMap.set("color", 'red')
// console.log(myMap)

// //how to get/access values

// console.log(obj.name)
// console.log(myMap.get('name'))
// console.log(myMap.get('age'))

// // how to check specific key is there

// console.log('name' in obj)
// console.log(obj.hasOwnProperty('name'))

// console.log(myMap.has('height'))


// // how to delete specific key

// delete obj.name
// console.log(obj)

// myMap.delete('name')
// console.log(myMap)

// // how to delete all keys

// // obj = {}
// // console.log(obj)

// // myMap.clear()

// console.log(myMap)

// // how to find length

// console.log(Object.keys(obj).length)

// console.log(myMap.size)


// // how to loop keys
   
// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())

// // how to convert

// let newMap = new Map(Object.entries(obj))
// console.log(newMap)

// let myobj = Object.fromEntries(newMap)
// console.log(myobj)

// // let { age, color } = obj

// let [ age, color ] = myMap

// console.log(age)
// console.log(color)

   

let obj = {
  name: 'sachin'
}


// let myMap = new Map()

// myMap.set(obj, true)

// obj = null
// console.log(myMap)

// let myWeakMap = new WeakMap()

// myWeakMap.set(obj, true)

// console.log(myWeakMap.get(obj))
// // console.log(myWeakMap.delete(obj))
// console.log(myWeakMap.has(obj))
// console.log(myWeakMap)