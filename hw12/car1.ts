import {Car} from "./car.js"
import {FuelCost,brandEquipment} from "./enums.js"
import {Bills} from "./bills.js"
import *  as fs from 'fs';



const bill = new Map([
    ["fuel", 500],
    ["flat", 350],
    ["rent", 50],
    ["tax", 1]
  ]);

  const newBill = new Bills(bill);
  console.log(Bills.getBill("fuel"));
// #### Task 4 💻
// В дочернем классе (можно в 1, можно в обоих) создать метод buy с параметром типа комплектации.
// Метод использует написанный в 3 задании метод и добавляет сумму к счетам в задании 2.
// В классе Bills добавить условие, что, если сумма счетов превышает определенный порог (например 50000), 
// то на `значение = сумма счетов - порог` отдельным счётом начисляется налог (налог не должен начисляться на налог) 

class NewCar1 extends Car{
    private readonly carBrand:string="Audi";
    private fuelType:string;
    private fuelAmount?:number;
   constructor(public tankCapacity: number, public fuelConsumption: number, public fuelReserve: number, fuelType:string, fuelAmount?:number ){ 
       super();
       this.fuelType = fuelType;
       if(fuelAmount){
           this.fuelAmount = fuelAmount;
       }
   }
    
   refuel(){
    const type = this.fuelType;
    if(this.fuelAmount){
        const petrolSum = FuelCost[type]*this.fuelAmount;
        console.log(petrolSum)
        this.fuelReserve=this.fuelReserve+this.fuelAmount;
    } else {
        const petrolSum = FuelCost[type]*(this.tankCapacity-this.fuelReserve);
        console.log(petrolSum)
        this.fuelReserve=this.tankCapacity;
    }       
   };
   getCost():string{
    const file = 'hw12/'+this.carBrand.toLowerCase() + '.txt'
    const complectation = brandEquipment[this.carBrand];
    const fileContent = fs.readFileSync(file, "utf8");
    if(!fileContent.includes(complectation))
    console.log("данного авто нет в продаже")
    else  console.log(fileContent)
    return fileContent;
   }
   buy(complectationType){
    const result = this.getCost();
     if(result.includes(complectationType)){
        const arr = result.split("\r\n");
        const res = arr.find(el => el.includes(complectationType));
        const result1 = +res.match(/\d+/)[0];
        Bills.addBill("autoCost",result1);
        const sum = Bills.sumBill();
        return sum;
     }
   }
}

const second = new NewCar1(65, 6.5,20, "Gasoline");
second.buy("comfort");
console.log(Bills.getBill("autoCost"));
