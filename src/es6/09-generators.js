function* listIterator(array) {
  for(let word of array) {
    yield word
  }
}

const iterator = listIterator(['Alma', 'Julia', 'Luisa', 'Maria'])

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)