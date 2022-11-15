import {Car, FuelCost, brandEquipment} from "./car.js"
import *  as fs from 'fs';


class NewCar extends Car{
    fuelType:string;
    private readonly carBrand:string="BMW";
    fuelAmount?:number;
   constructor(public tankCapacity: number, public fuelConsumption: number, public fuelReserve: number, fuelType:string, fuelAmount?:number ){ 
       super();
       this.fuelType = fuelType;
       if(fuelAmount){
           this.fuelAmount = fuelAmount;          
       }
   }
   
   drive(dist:number): void{
       let left = this.fuelReserve - this.fuelConsumption*dist/100;
       while (left<0){
           this.refuel();
           left = this.fuelReserve - this.fuelConsumption*dist/100;
       }
   
   };
   // В методе `refuel` добавьте расчет суммы за топливо с учетом типа топлива и заправляемого объёма 
//(до заправки в машине может оставаться топливо)
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
   }
   getCost(){
    const brand = this.carBrand;
    const file = (brand==="BMW")?"hw12/bmw.txt": "hw12/audi.txt";
    const complectation = brandEquipment[brand];
    let fileContent = fs.readFileSync(file, "utf8");
    if(!fileContent.includes(complectation))
    console.log("данного авто нет в продаже")
    else  console.log(fileContent)
   }
}

const first = new NewCar(30, 7, 10, "Gas", 10);
first.getCost();