

let table = document.getElementById('table')
console.log(table)


function tableFun(e) {
  console.log('clicked')
  console.log(e)
}

table.addEventListener('click', tableFun)