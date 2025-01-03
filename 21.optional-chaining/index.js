

var obj = {
  name: 'sachin',
  age: 40,
  address : {road: 101}
}

// console.log(obj.address.road)
// console.log(obj.address1.road)

//es-5

// console.log(obj && obj.address && obj.address.road)
// console.log(obj && obj.address1 && obj.address1.road)

// es-11

// console.log(obj.address1.road) //throws error
// console.log(obj && obj.address1 && obj.address1.road) //es-5
// console.log(obj?.address1?.road)//es-11