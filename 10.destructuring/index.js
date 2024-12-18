
//object destructuring


// let person = {
//   name: 'sachin',
//   age: 40,
//   address: {city: 'mumbai', road: 101}
// }

// console.log(person)

// without destructuring

// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)

//with destructuring

// let { name, age, address: {road, city} } = person

// let { city, road } = address

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)


// let person = {
//   name: 'sachin',
//   age: 40,
//   address: { city: 'mumbai', road: 101 },
//   properties: [
//     { cash: 200000 },
//     { childs: ['arjun', 'sara'] },
//     {bats: 20}
//   ]
// }

// console.log(person)

// // without destructuring
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)
// console.log(person.properties[0].cash)
// console.log(person.properties[1].childs[0])
// console.log(person.properties[1].childs[1])
// console.log(person.properties[2].bats)

// // with destructuring

// let { name, age, address: { city, road }, properties:[{cash}, {childs:[c1, c2]}, {bats}] } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(road)
// console.log(cash)
// console.log(c1)
// console.log(c2)
// console.log(bats)


//array destructuring

let arr = [1, 2, { name: 'sachin', age: 40 }, { properties: ['cash', 'cars', 'bats'] }]

// without destructuring

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2].name)
console.log(arr[2].age)
console.log(arr[3].properties[0])
console.log(arr[3].properties[1])
console.log(arr[3].properties[2])


// with destructuring

let [one, two, {name, age}, {properties:[v1, v2, v3]}] = arr

console.log(one)
console.log(two)
console.log(name)
console.log(age)
console.log(v1)
console.log(v2)
console.log(v3)