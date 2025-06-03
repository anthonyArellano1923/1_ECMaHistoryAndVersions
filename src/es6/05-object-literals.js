//Previous Es6

function newUserPrev(user, age, country, uId) {
  return {
    user: user,
    age: age,
    country: country,
    id: uId
  }
}

//After ES6

function newUserAfter(user, age, country, uId) {
  return { user, age, country, id: uId}
}

console.log(newUserPrev('Anthony', 31, 'Venezuela', 1))
console.log(newUserAfter('Ynoht', 31, 'Chile', 2))