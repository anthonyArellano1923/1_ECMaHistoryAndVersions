class User {
  constructor(name, age) {
    this._name = name
    this._age = age
  }
  #speak() {
    return 'Hello'
  }
  greet() {
    return `${this.#speak()}, ${this._name}`
  }

  set #name(uName) { this._name = uName }
  set #age(uAge) { this._age = uAge }

  get #name() { return this._name }
  get #age() { return this._age }
}

const david = new User('David', 20)
console.log(david.age)
console.log(david.age = 12)

try {
  console.log(david.speak())
} catch {
  console.log('Private Method.')
}
console.log(david.greet())