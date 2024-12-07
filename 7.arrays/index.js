

//how add new items to array


// let arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])

//adding last
// arr.push(6)

//add starting
// arr.unshift('hi')

//any where

// arr.splice(0, 0, 'dhoni')
// arr.splice(arr.length,  0, 'dhoni')
// arr.splice(3,  0, 'dhoni')

// console.log(arr)

//how to remove individual array items

// let arr = [1, 2, 3, 4, 5]

// console.log(arr)

//ending

// arr.pop()

// console.log(arr)

//starting

// arr.shift()

// console.log(arr)

//any where

// arr.splice(arr.length-1, 1)
// arr.splice(0, 1)
// arr.splice(2, 1)
// console.log(arr)


//how to remove all items from array

// let arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr.length)

// arr.length = 0

// arr = []

// arr.splice(0, arr.length)

// console.log(arr)


//how to combine or merge arrays

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = [11, 12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

//ES-5 concat()

// let combineArr = arr3.concat(arr2, arr1)
// console.log(combineArr)

//ES-6 spread operator

// let combineArr = [...arr1, ...arr2, ...arr3]
// console.log(combineArr)


//how to find array items

//primitives
// let arr = [2, 3, 4, 5, 2, 2]
// console.log(arr)

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))


//reference
// let arr = [{ course: 'react' }, { course: 'html' }, { course: 'react' }]

// console.log(arr)
// console.log(arr.indexOf({course: 'react'}))
// console.log(arr.lastIndexOf({course: 'react'}))
// console.log(arr.includes({course: 'react'}))

// var result = arr.find((obj) => {
//  return  obj.course === 'css'
// })

// console.log(result)

// var result = arr.findIndex((obj) => {
//  return  obj.course === 'react'
// })

// var result = arr.findLastIndex((obj) => {
//  return  obj.course === 'react'
// })

// console.log(result)

//how to loop arrays

//for of loop

// let arr = [1, 2, 3, 4, 5]

// for (var value of arr) {
//   console.log(value)
// }

//for in loop

// for (var key in arr) {
//   console.log(key, arr[key])
// }


//forEach method

// var result = arr.forEach((value, index) => {
//   // console.log(value, inndex)
//   return value
// })

// console.log(result)

//how to convert array into string

// var arr = [1, 2, 3, 4, 5]
// console.log(arr, typeof arr)
// console.log(Array.isArray(arr))

// var str = arr.join('*')
// console.log(str, typeof str)

// var myArr = str.split()
// console.log(myArr, typeof myArr)
// console.log(Array.isArray(myArr))

//testing of array items

// let arr = [1, 2, 3, 4, 5]

// let someRes = arr.some((item) => {
//  return item > 5
// })

// console.log(someRes)

// let everyRes = arr.every((item) => {
//  return item > 0
// })

// console.log(everyRes)

//filter array items

// let arr = [1, 2, 3, 4, 5]

// let filetRes = arr.filter((item) => {
//   return item > 2
// })

// console.log(arr)
// console.log(filetRes)

//map method

// let arr = [1, 2, 3, 4, 5]

// let mapRes = arr.map((item) => {
//   return item*100
// })

// console.log(arr)
// console.log(mapRes)

// let foreachRes = arr.forEach((item) => {
//    return  item*100
// })
// console.log(foreachRes)

//reduce method

// let arr = [1, 2, 3, 4, 5]
// let reduceRes = arr.reduce((cum, cur) => {
//   // console.log(cum, cur)
//   console.log(cum, cur)
//   return cum + cur
// }, 100)

// console.log(reduceRes)


// how to remove duplicate items from array

// let arr = [1, 2, 3, 2, 4, 5, 2]

//Set with spread operator

// let uniqueArr = [...new Set(arr)]

// console.log(arr)
// console.log(uniqueArr)

//indexOf

// let uniqueArr = []

// function removeDupliate(arr) {
//   console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.includes(value) == false) {
//       uniqueArr.push(value)
//     }

//   }
// }

// removeDupliate(arr)

// console.log(uniqueArr)


//How to flatten array

// let arr = [1, 2, [3, 4], [5, 6, [7, 8],]]

// console.log(arr)


// let flattenArr = arr.flat(Infinity)
// let flattenArr = arr.flat(2)
// console.log(flattenArr)

//Array.isArray()

// let flattenArr = []

// function flatteningFun(arr) {
//   console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flatteningFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }

// flatteningFun(arr)

// console.log(flattenArr)







