

//object literal way

// var obj1 = {
//   name: 'sachin',
//   age: 40,
//   play: () => {
//     console.log('play')
//   }
// }
// console.log(obj1)

// var obj2 = {
//   name: 'kohli',
//   age: 30,
//   play: () => {
//     console.log('play')
//   }
// }
// console.log(obj2)

//factory function

// function Test(name, age) {
//  return  {
//   name: name,
//   age: age,
//   play: () => {
//     console.log('play')
//   }
// }
 
// }

// var obj1 = Test('sachin', 40)
// var obj2 = Test('kohli', 30)
// var obj3 = Test('dhoni', 35)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

//constructor function

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = () => {
//     console.log('play')
//   }
// }

// var obj1 = new Test('sachin', 40)
// var obj2 = new Test('kohli', 30)
// var obj3 = new Test('dhoni',35)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//classical way (ES-6)

// class Test{
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//     this.play = () => {
//       console.log('play')
//     }
//   }
// }

// var obj1 = new Test('sachin', 40)
// var obj2 = new Test('kohli', 30)
// var obj3 = new Test('dhoni', 35)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(typeof Test)

//Manipulating object


// var obj1 = {
//   name: 'sachin',
//   age: 40,
//   play: () => {
//     console.log('play')
//   }
// }


//how to access / read object values
// console.log(obj1)

// console.log(obj1.name)
// console.log(obj1.age)
// console.log(obj1.play)
// obj1.play()

//how to add new propeties to obj

// console.log(obj1)
// obj1.color = 'red'
// obj1.go = ()=>{}
// console.log(obj1)

//how to update obj values

// obj1.name = 'dhoni'
// console.log(obj1)

//how to delete obj properties

// console.log(obj1)

// delete obj1.name
// delete obj1.age
// delete obj1.go
// console.log(obj1)

var obj = {
  name: 'sachin',
  age: 40,
  play: function () {
    console.log('play')
  }
}

// console.log(obj)

//without loop

// console.log(obj['name'])
// console.log(obj.age)
// console.log(obj.play)

// loop

// console.log(obj)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// Object.keys

// let keys = Object.keys(obj)
// console.log(keys)

// Object.values
// let values = Object.values(obj)
// console.log(values)

// Object.entries
// let entries = Object.entries(obj)
// console.log(entries)

//copy or clone

//primitives (deep copy)

// var x = 10


// var y = x

// y = 20

// console.log(x)
// console.log(y)
// import lodash from 'lodash'
// let lodash = require('lodash')

//object

// var x = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {
//     console.log('play')
//   }
// }

// var y = x //normal copy
// var y = JSON.parse(JSON.stringify(x)) //deep copy
// var y = lodash.cloneDeep(x) //deep copy
// var y = Object.assign({}, x) //shallow copy(ES-5)
// var y =  {...x} //shallow copy(ES-6)

// y.name = 'kohli'
// y.address.road = 201

// console.log(x)
// console.log(y)

//Math object

// console.log(Math)

// var a = 10
// var b = 3
// var c = 30

// console.log(Math.min(10, 3, 30))
// console.log(Math.max(10, 3, 30))
// console.log(Math.round(4.5))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.1))
// console.log(Math.ceil(4.9))
// console.log(Math.floor(4.9))
// console.log(Math.random()*100)
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(25))


//Date object

// let now = new Date()
// console.log(now)

//get methods

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())

//set methods

// console.log(now.setFullYear(2050))
// console.log(now.setMonth(10))
// console.log(now.setDate(2))
// console.log(now.setMinutes(30))
// console.log(now.setHours(10))
// console.log(now.setSeconds(30))
// console.log(now)

//number (custom date)

// let date1 = new Date(2047, 7, 10, 7, 30, 45)
// console.log(date1)
// console.log(date1.getFullYear())
// date1.setFullYear(1947)
// console.log(date1)

//string (custom date)

// let date2 = new Date('2047 feb 10 9:40:30')
// console.log(date2)
// console.log(date2.getFullYear())
// date2.setFullYear(1947)
// console.log(date2)


//ES-5 syntax

// var name = 'sachin'
// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)

//ES-6 Template string

// console.log(`Hi this is ${name} my age is ${age}`)


//String object

// let msg = 'Hi how are you'

//how to find string length
// console.log(msg.length)

// how to trim spaces

// let msg = ' Hi how are you '
// console.log(msg.length)
// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)
// console.log(msg.trim().length)

//how to extract a part of string
// let msg = 'Hi how are you'

// let part = msg.slice(3, 6)
// let part = msg.slice(3, 6)
// let part = msg.slice()
// console.log(part)

//how to extract a string character

// let msg = 'Hi how are you'

// var char = msg.charAt(0)
// console.log(char)

// var charcode = msg.charCodeAt(0)
// console.log(charcode)

//how to convert case
// let msg = 'Hi how are you'
// let msg = 'sachin'

// console.log(msg.toLowerCase())
// console.log(msg.toUpperCase())
// console.log(msg.charAt(0).toUpperCase())


//how to add new string at the end of string

// let msg = 'Hi how are you'

// let newStr = msg.concat(` sachin`)
// console.log(newStr)

//how to replace existing string with new string
// let msg = 'Hi how are you'
// console.log(msg.replace('You', 'me'))

//how to convert string in array

// let msg = 'Hi how are you'

// let arr = msg.split()
// let arr = msg.split('')
// let arr = msg.split(' ')
// console.log(arr)

//how to add or  pad new string

// let msg = 'hi'

// console.log(msg.padStart(7, 10))
// console.log(msg.padEnd(7, 10))

//how to find specific string

// let msg = 'Hi how are Hi you Hi'

// console.log(msg.startsWith('Hi'))
// console.log(msg.startsWith('bye'))
// console.log(msg.endsWith('you'))
// console.log(msg.endsWith('bye'))
// console.log(msg.includes('you'))
// console.log(msg.endsWith('bye'))
// console.log(msg.indexOf('Hi'))
// console.log(msg.indexOf('bye'))
// console.log(msg.lastIndexOf('Hi'))
// console.log(msg.lastIndexOf('bye'))

//how to repeat string

// var msg = 'hi how are you'

// console.log(msg.repeat(4))














