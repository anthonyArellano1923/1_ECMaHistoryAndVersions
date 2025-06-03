class Greet {
  greet() {
    return 'Hello'
  }
}

const greet = new Greet()
console.log(greet.greet())

const greet2 = new Greet()
console.log(greet2.greet())

class User1 {
  constructor() {
    console.log('Nuevo usuario.')
  }
}

const user1 = new User1()

class User2 {
  constructor(name) {
    this.name = name
  }
  speak() {
    return 'Hello'
  }
  greet() {
    return `${this.speak()}, ${this.name}`
  }
}

const ana = new User2('Ana')
console.log(ana.greet())

class User3 {
  constructor(name, age) {
    this._name = name
    this._age = age
  }
  speak() {
    return 'Hello'
  }
  greet() {
    return `${this.speak()}, ${this.name}`
  }

  set name(uName) { this._name = uName }
  set age(uAge) { this._age = uAge }

  get name() { return this._name }
  get age() { return this._age }
}

const david = new User3('David', 20)
console.log(david.age)
console.log(david.age = 12)