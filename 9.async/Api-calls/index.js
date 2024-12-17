
//get data 

let getBtn = document.getElementById('getdata')

function getDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
     headers: {
      "Content-Type": "Application/json"
    }
  })
  .then((res) => {
   return  res.json()
  }).then((posts) => {
     console.log(posts)
})
  
}

getBtn.addEventListener('click', getDataFun)

//send data

let sendBtn = document.getElementById('senddata')

let newPost = {
  userId: '200',
  title: 'my tile',
  body: 'my body'
}

function sendDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(newPost)
  }).then((res) => {
     return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
  
}
sendBtn.addEventListener('click', sendDataFun)

//update data

let updateBtn = document.getElementById('updatedata')


function updateBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(newPost)
  }).then((res) => {
     return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

updateBtn.addEventListener('click', updateBtnFun)

//delete data

let deleteBtn = document.getElementById('deletedata')


function deleteBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/100', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json'
    }
  }).then((res) => {
    console.log(res)
   })
    .catch((err) => {
      console.log(err)
     })
}

deleteBtn.addEventListener('click', deleteBtnFun)


