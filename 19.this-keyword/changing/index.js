
// var obj = {
//   name: 'sachin',
//   age: 40
// }


// // function test(a,b,c) {
// //   console.log(this)
// //   console.log(a,b,c)
// // }
// let test = (a,b,c)=> {
//   console.log(this)
//   console.log(a,b,c)
// }

// test(1,2,3)
// test.call(obj, 1,2,3)
// test.apply(obj, [1, 2, 3])
// test.bind(obj, 1,2,3)()


let person = {
  name: 'sachin',
  age: 40,
  test (){
    // console.log(this)
    inner1 = () => {
      console.log(this)
    }
    inner1()
    // inner1.call(person)
    // inner1.apply(person)
    // inner1.bind(person)()
    inner2 = () => {
      // console.log(this)
    }
    inner2()
  },
  play : ()=> {
    // console.log(this)
     inner3 = function() {
      console.log(this)
    }
    // inner3()
    inner3.call(person)
    // inner3.apply(person)
    // inner3.bind(person)()
    inner4 = () => {
      // console.log(this)
    }
    inner4()
  }
}

person.test()
person.play()


