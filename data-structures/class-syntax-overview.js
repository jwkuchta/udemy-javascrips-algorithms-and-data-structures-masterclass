// ES2015 Class Syntax
// Class keyword was introduced, it makes it easier to define data structures
// what is a class? blueprint for creating objects with pre-defined properties and metthods
// JS does not really have classes and the class keyword is syntactic sugar. JS has never been truly OO
// it is not changing how things work behind the scenes (which is prototypal inheritance)


class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

let ina = new Student("Ina", "Bina")
console.log('Hello', ina.firstName)