// #### Task 3 💻

// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. 
// К примеру `This car has 3 doors and this is left-hand drive car`

class Cars{
    private doorsNumber:number;
    private wheelPosition:string;
    constructor(doorsNumber:number, wheelPosition:string){
        this.doorsNumber = doorsNumber;
        this.wheelPosition = wheelPosition;
    }

    consoleCarInformation(){
        console.log(`This car has ${this.doorsNumber} doors and this is ${this.wheelPosition} drive car`)
    }
}

const car3 = new Cars(3, "left-hand");
const car4 = new Cars(5, "right-hand");
car3.consoleCarInformation();
car4.consoleCarInformation();
