// #### Task 4 💻

// Опишите интерфейс IElectronics. 
// У интерфейса есть свойства price - число, electrType - строка, manufacturer - строка и метод turnOn. 
// Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
// Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
// и выводит 3 свойства и вызывает метод turnOn.

interface IElectronics{
    price : number,
    electrType : string,
    manufacturer : string,
    turnOn():void,
}

class Phone implements IElectronics {
    price : number;
    electrType : string;
    manufacturer : string ;
        constructor(price : number, electrType : string, manufacturer : string){
            this.price = price;
            this.electrType = electrType;
            this.manufacturer = manufacturer;
        }

    turnOn():void{
        console.log(`this ${this.electrType} is on`)
    }
}

class TV implements IElectronics {
    price : number;
    electrType : string;
    manufacturer : string;
        constructor(price : number, electrType : string, manufacturer : string){
            this.price = price;
            this.electrType = electrType;
            this.manufacturer = manufacturer;
        }

    turnOn():void{
        console.log(`this ${this.electrType} is on`)
    }
}

const phone = new Phone(55,"phpne", "sony");


const tv = new TV(555,"tv", "sams")


const func = (obj:TV|Phone)=>{    
    for (const i in obj){
        const key = i as keyof typeof obj
        console.log(key);
    }
    obj.turnOn();
}

func(phone);
