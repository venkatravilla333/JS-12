

// console.log('hi')
// try {
// console.log('one')
// console.log(two)

// } catch (error) {
//   console.log(error, 'error handled')
// }
// console.log('after')
// console.log('three')

var age = 17

if (age < 18) {
  console.log('not having vote right')
  throw new Error('age must be >=18')
} else {
  console.log(age)
  console.log('having vote right')
}