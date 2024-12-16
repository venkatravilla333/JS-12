

let getBtn = document.getElementById('getdata')


function getDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
   return  res.json()
  }).then((posts) => {
     console.log(posts)
})
  
}

getBtn.addEventListener('click', getDataFun)


