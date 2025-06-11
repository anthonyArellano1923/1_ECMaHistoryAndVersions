async function* anotherGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generator = anotherGenerator()
generator.next().then(response => console.log(response.value))
generator.next().then(response => console.log(response.value))
generator.next().then(response => console.log(response.value))
console.log('Hello!')

async function namesListPrinter(array) {
  for await(let name of array) {
    console.log(name)
  }
}

const names = namesListPrinter(['Jose', 'Gregorio', 'Paula'])
console.log('Here we have some names:')
