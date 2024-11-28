

// how to define function

// declaration

// var a  = 10

// function test() {
//   var a = 100
// }
// test()

// expression

// var x = function test() {
  
// }

// var y = function() {
  
// }

// var z = ()=>{
  
// }

//params vs arguments

// function test(name1, age) {
//   console.log(name1)
//   console.log(age)
// }

// test('sachin', 40)


//default param (ES-6)

// function test(name = 'sachin', age) {
//   console.log(name)
//   console.log(age)
// }

// test()

//varying no of params vs arguments

//ES-5

// function test() {
//   // console.log(arguments)
//   // console.log(typeof arguments)
//   // console.log(Array.isArray(arguments))
//   var sum = 0

//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])

//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
  
// }

// test(1,2,3)

//ES-6

// function test(...rest) {
//   console.log(rest)
//   var sum = 0
//   // console.log(rest[0])
//   // console.log(rest[1])
//   // console.log(rest[2])
//   for (var value of rest) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
// }

// test(1, 2, 3)

//scope

//storage (Global)

// var a = 1
// let b = 2
// const c = 3

//access (global)

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   //store
//   var d = 4
//   let e = 5
//   const f = 6

//   //access
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {

//     //store

//     var g = 7
//     let h = 8
//     const i = 9

//     //access
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
    
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }
// test()
// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)


 

// {
//   var x = 10
//   let y = 20
//   const z = 30
// }


// console.log(x)
// console.log(y)
// console.log(z)

// console.log(x)

// var x = 100

// function test() {
//   // var x = 100
// }

// test()

// function test2() {
//   console.log(x)
// }
// test2()


//hoisting

//all variables

// console.log(a)
// var a = 'sachin'
// const a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = {
//   name: 'sachin',
//   age: 40
// }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// // console.log(h)
// h()
// let h = function test() {
//   console.log('named')
// }
// h()
// console.log(h)

// console.log(i)
// var i = function () {
//   console.log('Anonymous')
// }
// console.log(i)

// console.log(j)
// var j = () => {
//   console.log('arrow')
// }
// console.log(j)


// //function declaration
// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)
// declare()



// var a = 1
// console.log(a) 

// console.log(a) 
// function test() {
//   // console.log(a) 
//   a = 10
//   console.log(a) //10
// }
// test()
