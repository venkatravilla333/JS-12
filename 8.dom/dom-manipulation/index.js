

let addButton = document.getElementById('add')
console.log(add)



function add() {
  
  let para = document.createElement('p')
  console.log(para)
  
  para.id = 'myid'
  para.className = 'myclass'
  
  para.innerText = 'This is para'
  let parent = document.getElementById('body')
  
  console.log(parent)

  parent.appendChild(para)

}

addButton.addEventListener('mouseover', add)


//How to create element



// let paraText = document.createTextNode('This is para')
// console.log(paraText)
// para.appendChild(paraText)


//how to add element to dom


let h1 = document.createElement('h1')

console.log(h1)
h1.id = 'myh1'

h1.innerText = 'This is heading one'

// parent.appendChild(h1)
// parent.insertBefore(h1, para)

//How to replace old element with new element

let div = document.createElement('div')

div.id = 'mydiv'

div.innerText = 'This is my div'

console.log(div)

// parent.replaceChild(div, h1)


//How to delete element from dom

// div.remove()

// parent.removeChild(para)
// parent.removeChild(div)
