

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


var obj1 = {
  name: 'sachin',
  age: 40,
  play: () => {
    console.log('play')
  }
}


//how to access / read object values
console.log(obj1) 

console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.play)
obj1.play()

//how to add new propeties to obj

console.log(obj1)
obj1.color = 'red'
obj1.go = ()=>{}
console.log(obj1)

//how to update obj values

obj1.name = 'dhoni'
console.log(obj1)

//how to delete obj properties

console.log(obj1)

delete obj1.name
delete obj1.age
delete obj1.go
console.log(obj1)

