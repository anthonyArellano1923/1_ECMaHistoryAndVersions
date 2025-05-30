const fruits = ['Fresa', 'Banana']
const user = {username: 'Anthony', age: 31}

//Desestructuración de listas.
const [fruitA, fruitB] = fruits

//Desestructuración de objetos.
const {username, age} = user

console.log(fruitA, fruits[0])
console.log(username, user.username)

//Spread operator.

const user1 = {name: 'Anthony', age: 31}
const usersCountry = 'Italy'

const data = { ...user1, usersCountry}
const data1 = {id: 1, ...user1, usersCountry}

console.log(data, '\n', data1)

//Rest.

function sum(value1, ...values) {
  console.log(values)
  return value1 + values.reduce((prev, next) => prev + next)
}

console.log(sum(1, 2))
console.log(sum(10, 20, 30, 40))




