// #### Task 2 💻
// Написать класс человека, который принимает имя и рост в метрах в конструкторе
// Класс имеет 1 статическое поле: коэффициент длины шага при беге = 0.65
// И 1 статический метод, который принимает рост в качестве параметра и 
// вычисляет длину шага при ходьбе по формуле `Рост / 4) + 0,37`
// Написать в классе геттер для получения длины шага при беге = `коэффициент длины шага * рост`
// И написать метод, `logWalkStep`, который выводит в консоль `Длина вашего шага ${length}`
// вывести в консоль геттер и вызвать `logWalkStep`


class Person {
    name:string;
    height:number;
    static coeff:number = 0.65;

    constructor(name:string, height:number){
        this.name = name;
        this.height = height;
    }

    static cauntStepLength(height:number):number{
        return height/4 + 0.37;
    }

    get runStepLength(){
        return Person.coeff*this.height;
    }

    logWalkStep(){
        console.log(`Длина вашего шага ${Person.cauntStepLength(this.height)}`)
    }
}

const newPerson = new Person("Mark", 1.87);
console.log(newPerson.runStepLength);
newPerson.logWalkStep();
