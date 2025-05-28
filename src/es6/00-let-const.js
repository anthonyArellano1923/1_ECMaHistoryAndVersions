let fruit = 'Orange'
let animal = 'Dog'
const someThings = ['Apple', 'Tree', 'Cat']

console.log( {fruit: fruit, animal: animal, things: someThings})

const fruits = function() {
  if(true){
    var fruit1 = 'Apple'
    const fruit2 = 'Kiwi'
    let fruit3 = 'Banana' 
  }
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits()