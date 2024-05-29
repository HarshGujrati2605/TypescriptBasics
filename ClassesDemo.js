"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
}
const person = new Person("Gopi Kiran Manusu");
console.log(person.getname());
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
}
const pr2 = new Person("Harsh");
console.log(pr2.getname());
