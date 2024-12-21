
//local storage

// //store

// let setBtn = document.getElementById('set')
// function setBtnFun() {
//   window.localStorage.setItem('name', 'kohli')
//   window.localStorage.setItem('age', 30)
// }

// setBtn.addEventListener('click', setBtnFun)

// //get

// let getBtn = document.getElementById('get')

// function getBtnFun() {
 
//   // let name = localStorage.getItem('name')
//   // let age = localStorage.getItem('age')
//   let h3 = document.createElement('h3')
//   let h4 = document.createElement('h4')
//   h3.innerText = localStorage.getItem('name')
//   h4.innerText = localStorage.getItem('age')
//   console.log(h3)
//   let parent = document.getElementById('body')
//   parent.appendChild(h3)
//   parent.appendChild(h4)
// }

// getBtn.addEventListener('click', getBtnFun)

// //remove

// let removeBtn = document.getElementById('remove')

// function removeBtnFun() {
//   localStorage.removeItem('name')
//   localStorage.removeItem('age')
// }

// removeBtn.addEventListener('click', removeBtnFun)

// //clear

// let clearBtn = document.getElementById('clear')

// function clearBtnFun() {
//   localStorage.clear()
// }

// clearBtn.addEventListener('click', clearBtnFun,)

//session storage

//store


let setBtn = document.getElementById('set')
function setBtnFun() {
  window.sessionStorage.setItem('name', 'kohli')
  window.sessionStorage.setItem('age', 30)
}

setBtn.addEventListener('click', setBtnFun)

//get

let getBtn = document.getElementById('get')

function getBtnFun() {
 
  // let name = sessionStorage.getItem('name')
  // let age = sessionStorage.getItem('age')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')
  h3.innerText = sessionStorage.getItem('name')
  h4.innerText = sessionStorage.getItem('age')
  console.log(h3)
  let parent = document.getElementById('body')
  parent.appendChild(h3)
  parent.appendChild(h4)
}

getBtn.addEventListener('click', getBtnFun)

//remove

let removeBtn = document.getElementById('remove')

function removeBtnFun() {
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('age')
}

removeBtn.addEventListener('click', removeBtnFun)

//clear

let clearBtn = document.getElementById('clear')

function clearBtnFun() {
  sessionStorage.clear()
}

clearBtn.addEventListener('click', clearBtnFun,)