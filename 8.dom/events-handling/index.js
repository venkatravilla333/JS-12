

let subchild = document.getElementById('subchild')
let  child = document.getElementById('child')
let  parent = document.getElementById('parent')


//bubling

function subchildFun(e) {
  console.log('subchild')
  console.log(e)
  console.log(e.target)
  console.log(e.clientX)
  console.log(e.offsetX)
  console.log(e.clientY)
  console.log(e.offsetY)
}

subchild.addEventListener('click', subchildFun)


function childFun(e) {
  console.log('child')
  // e.stopPropagation()
}

child.addEventListener('click', childFun)


function parentFun() {
  console.log('parent')
}


parent.addEventListener('click', parentFun)


//capturing


// function subchildFun(e) {
//   console.log('subchild')
//   console.log(e)
// }

// subchild.addEventListener('click', subchildFun, true)


// function childFun() {
//   console.log('child')
// }

// child.addEventListener('click', childFun, true)


// function parentFun() {
//   console.log('parent')
// }


// parent.addEventListener('click', parentFun, true)