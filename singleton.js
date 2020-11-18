class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

        if(typeof Person.instance === 'object') return Person.instance;
        Person.instance = this;
    }
}

let person1 = new Person('Carlos', 39);
console.log(person1);
let person2 = new Person('Luciano', 40);
console.log(person2);