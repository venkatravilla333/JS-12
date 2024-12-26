

// function regular() {
//   return 100
//   return 200
//   return 300
// }

// console.log(regular())

function* genFun() {
  console.log('one')
  console.log('two')
  yield 100
  yield 200
  
}
let genObj = genFun()
console.log(genObj)
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())

for (var value of genObj) {
  console.log(value)
}