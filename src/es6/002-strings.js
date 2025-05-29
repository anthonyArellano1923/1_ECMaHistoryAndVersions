//Template literals
const hello = 'Hello'
const world = 'World'

const epicPhrase = hello + ' ' + world + '!'
const epicPhrase2 = `${hello} ${world}!`

console.log(`${epicPhrase} \n${epicPhrase2}`)

//Multi-line Strings

const multiLine1 = 'Esto es un str multi-linea \n' + 'Esta es la segunda línea.'
const multiLine2 = `Esto es un str multi-linea con template literals
Esta es la segunda línea.`

console.log(`${multiLine1} \n${multiLine2}`)