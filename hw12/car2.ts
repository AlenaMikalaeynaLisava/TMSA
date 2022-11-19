import {Car} from "./car.js"
import {FuelCost,brandEquipment} from "./enums.js"
import *  as fs from 'fs';


class NewCar extends Car{
    private fuelType:string;
    private readonly carBrand:string="BMW";
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
   }
   getCost(){
    const file = 'hw12/'+this.carBrand.toLowerCase() + '.txt'
    const complectation = brandEquipment[this.carBrand];
    let fileContent = fs.readFileSync(file, "utf8");
    if(!fileContent.includes(complectation))
    console.log("данного авто нет в продаже")
    else  console.log(fileContent)
   }
}

const first = new NewCar(30, 7, 10, "Gas", 10);
first.getCost();