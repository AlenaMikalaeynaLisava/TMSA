// #### Task 1 💻

// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
// Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
// Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
// Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
// Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)





class Car{
    protected carName:string;
    protected engineType:string;

    protected constructor(carName:string, engineType:string){
        this.carName = carName;
        this.engineType = engineType;
    }
}

class SportCar extends Car{
    private maxSpeed:number;
    private carCost:number;
    constructor(carName:string, engineType:string, maxSpeed:number, carCost:number){
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    consoleMaxSpeedAndCarCost() {
        console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. 
            // Approximetly cost of the car is ${this.carCost}`);
      }
}
class LuxuryCar extends Car{
    private maxSpeed:number;
    private carCost:number;
    constructor(carName:string, engineType:string, maxSpeed:number, carCost:number){
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    consoleMaxSpeedAndCarCost() {
        console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. 
            // Approximetly cost of the car is ${this.carCost}`);
      }
}

const car1 = new SportCar("AudiS3", "petrol", 450, 100000);
const car2 = new LuxuryCar("JaguarXJ", "petrol", 350, 150000);
car1.consoleMaxSpeedAndCarCost();
car2.consoleMaxSpeedAndCarCost();