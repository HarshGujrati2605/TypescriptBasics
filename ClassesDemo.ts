class Person {

    private name: string;

    public constructor(name: string) {

        this.name = name;

    }
    public getname(): string {
        return this.name
    }
}

const person = new Person("Gopi Kiran Manusu");
console.log(person.getname())


class Person2 {

    readonly name: string;

    public constructor(name: string) {

        this.name = name;

    }
    public getname(): string {
        return this.name
    }
}

const pr2 = new Person("Harsh")
console.log(pr2.getname())
