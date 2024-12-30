

// console.log(this)


//regular function

// function test() {
//   console.log(this)
// }

// test()


//arrow function

// let test = ()=> {
//   console.log(this)
// }

// test()

// let person = {
//   name: 'sachin',
//   age: 40,
//   test (){
//     // console.log(this)
//     inner1 = function () {
//       // console.log(this)
//     }
//     inner1()
//     inner2 = () => {
//       // console.log(this)
//     }
//     inner2()
//   },
//   play : ()=> {
//     console.log(this)
//      inner3 = function () {
//       console.log(this)
//     }
//     inner3()
//     inner4 = () => {
//       console.log(this)
//     }
//     inner4()
//   }
// }

// person.test()
// person.play()


//constructor function way

// function Test() {
//   // console.log(this)
//   this.play1 = function () {
//     // console.log(this)
//     inner1 = function () {
//       console.log(this)
//     }
//     inner1()
//     inner2 = () => {
//       console.log(this)
//     }
//     inner2()

//   }
//   this.play2 = ()=> {
//     // console.log(this)
//     inner3 = function () {
//       console.log(this)
//     }
//     inner3()
//     inner4 = () => {
//       console.log(this)
//     }
//     inner4()
//   }
// }

// let obj = new Test()
// obj.play1()
// obj.play2()


//Es-6

class Test{
  constructor() {
    // console.log(this)
    this.play1 = function () {
      console.log(this)
       function inner1 () {
        console.log(this)
        }
      inner1()

      let inner2 = () => {
        console.log(this)
      }
      inner2()
      
    }
    this.play2 = ()=> {
      // console.log(this)
      function inner3 () {
        console.log(this)
        }
      inner3()

      let inner4 = () => {
        console.log(this)
      }
      inner4()
    }
  }
}

let obj = new Test()

obj.play1()
obj.play2()


