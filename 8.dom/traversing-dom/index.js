let mydiv = document.getElementById('mydiv')

console.log(mydiv)

//parent

let parent = mydiv.parentElement

parent.style.background = 'yellow'
console.log(parent)

//siblings

let preSib = mydiv.previousElementSibling

preSib.style.background = 'blue'

console.log(preSib)

let nextSib = mydiv.nextElementSibling
nextSib.style.background = 'green'

console.log(nextSib)

//childs

let firstChild = mydiv.firstElementChild

firstChild.style.background = 'black'
firstChild.style.color = 'white'
console.log(firstChild)

let lastChild = mydiv.lastElementChild

console.log(lastChild)
lastChild.style.background = 'orange'

let allChilds = mydiv.children

allChilds[0].style.background = 'orange'
allChilds[1].style.background = 'red'
allChilds[2].style.background = 'blue'

console.log(allChilds)
