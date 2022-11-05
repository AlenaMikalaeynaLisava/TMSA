// #### Task 2 💻

// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. 
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

class People{
    name:string;

    constructor(name :string){
        this.name = name;
    }

    getNme(){
        console.log(`My name is ${this.name}`)
    }
}

const person1 = new People("Max");
const person2 = new People("Vlad");

person1.getNme();
person2.getNme();