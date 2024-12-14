

// console.log('hi')

// setTimeout(() => {
//   console.log('timer-1')
// }, 4000)

// console.log('hello')

// setTimeout(() => {
//   console.log('timer-2')
// }, 0)

// Promise.resolve().then(() => console.log('pr-1')).then(() => console.log('pr-2'))

// setTimeout(() => {
//   console.log('timer-3')
// }, 1000)

// console.log('bye')


// let data

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // data = 'sachin'
//     data = num*num
//     displayData(data)
//  }, 4000)
// }

// fetchData(2, function displayData(data1) {
//   console.log(data1)
//   fetchData(data1, function displayData(data2) {
//     console.log(data2)
//      fetchData(data2, function displayData(data3) {
//        console.log(data3)
//        fetchData(data3, function displayData(data4) {
//          console.log(data4)
//          fetchData(data4, function displayData(data5) {
//            console.log(data5)
//              })
//           })
//       })
//    })
// })


let data 

function fetchData(num) {
  let prRes = new Promise((res, rej) => {
    setTimeout(() => {
      // data = res('sachin')
      data = res(num*num)
    }, 4000)
  })
  return prRes
}

fetchData(2).then((data1)=> {
  console.log(data1)
  return fetchData(data1)
}).then((data2) => {
  console.log(data2)
  return fetchData(data2)
}).then((data3) => {
  console.log(data3)
  return fetchData(data3)
}).then((data4) => {
  console.log(data4)
  return fetchData(data4)
}).then((data5) => {
  console.log(data5)
})





