const user = { username: 'Anthony', age: 31, country: 'VE'}
const { username, ...values } = user
console.log(user, username, values)