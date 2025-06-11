const array1 = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10]]]
console.log(array1.flat(3))

const array2 = [1, 2, 3, 4, 5, 6]
console.log(array2.flatMap(value => [value, value * 2]))