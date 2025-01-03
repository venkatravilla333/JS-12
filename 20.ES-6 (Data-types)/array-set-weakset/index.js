

//how to create

let arr = [1,2,3,3,3]

let mySet = new Set([1,2,3,3,3])

console.log(arr)
console.log(mySet)

//how to add new item

let obj = {
  name: 'dhoni'
}
arr.push(4)
console.log(arr)
mySet.add(obj)
console.log(mySet)

obj = null

console.log(mySet)

//how to access
console.log(arr[0])

let abc = [...mySet]

console.log(abc[0])

//how to delete values

arr.pop()
arr.pop()
console.log(arr)

mySet.delete(4)
mySet.delete(3)
console.log(mySet)


// Check if element exist

console.log(arr.includes(2))

console.log(mySet.has(2))

//check size

console.log(arr.length)
console.log(mySet.size)

//empty list

// arr = []
// console.log(arr)
// mySet.clear()
// console.log(mySet)

//loop through items

for (var value of arr) {
  console.log(value)
}
for (var value of mySet) {
  console.log(value)
}


//set vs weakSet

let obj1 = {
  name: 'sachin'
}
let obj2 = {
  name: 'kohli'
}

let myweekSet = new WeakSet()

myweekSet.add(obj1)
myweekSet.add(obj2)

obj1 = null

console.log(myweekSet)


