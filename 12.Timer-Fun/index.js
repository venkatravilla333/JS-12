

let t1Btn = document.getElementById('t1')
let t2Btn = document.getElementById('t2')

let timer1 = setTimeout(() => {
  console.log('set timeout')
}, 4000)

let timer2 = setInterval(() => {
  console.log('set interval')
}, 4000)

function t1BtnFun() {
  clearTimeout(timer1)
}
function t2BtnFun() {
  clearInterval(timer2)
}

t1Btn.addEventListener('click', t1BtnFun)
t2Btn.addEventListener('click', t2BtnFun)
