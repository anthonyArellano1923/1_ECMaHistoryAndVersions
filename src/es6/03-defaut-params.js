function defaultFunction(name, lastName, age) {
  var name1 = name || 'Guest User'
  var lastName1 = lastName || ''
  var age1 = age || 'D/A'

  return console.log('Usuario: ' + name1 + ' ' + lastName1 + '. ' + 'Edad: ' + age1)
}

defaultFunction()
defaultFunction('Anthony', 'Arellano', 31)

function newDefaultFunction(name = 'Guest User', lastName = '', age = '+18') {
  var name2 = name
  var lastName2 = lastName
  var age2 = age

  return console.log(`Usuario: ${name2} ${lastName2}. Edad: ${age2}`)
}

newDefaultFunction()
newDefaultFunction('Ynoht', 'Skylar', 31)