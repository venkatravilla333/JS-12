

// let itarableDs = [1, 2, 3, 4, 5]

// let iteratorObj = itarableDs[Symbol.iterator]()

// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

// for (var value of itarableDs) {
//   console.log(value)
// }

let obj = {
  name: 'sachin',
  age: 40,
  address: 'mumbai'
}


obj[Symbol.iterator] = function () {
  
  let properties = Object.keys(obj)

  let count = 0

  next = ()=>{
    if (count >= properties.length) {
        return {done: true, value: undefined}
    } else {
        return {done: false, value:this[properties[count++]]}
      }
  }

  return {next} //iterator obj

}
console.log(obj)

// let iteratorObj = obj[Symbol.iterator]()

// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())


// for (var value of obj) {
//   console.log(value)
// }


//default iterable ds

// let arr = []
// console.log(arr)

// let str = new String('hello')

// console.log(str)

// let myMap = new Map()

// myMap.set('name', 'kohli')

// console.log(myMap)

// let mySet = new Set([])

// console.log(mySet)

// function test() {
//   console.log(arguments)
// }
// test()


