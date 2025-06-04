const promise = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Async!!'), 2000)
    : reject(new Error('Error!'))
  })
}

const async = () => {
  const something = promise()
  console.log(something)
  console.log('Hello!')
}

console.log('Before')
async()
console.log('After')