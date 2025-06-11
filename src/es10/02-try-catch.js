try {
  hello()
} catch(error) {
  console.log(error)
}

try {
  goodBye()
} catch {
  console.log('Esta función no existe')
}