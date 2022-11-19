
// #### Task 2 💻
// Создайте класс Bills в отдельном файле с:
// - приватным static полем, содержащим суммы долгов 
// - публичный static методам getBill (с параметром типа string). 
//Возвращает сумму по счету параметра (вроде fuel, flat rent и тд)
// - addBill (параметры string и number). Добавляет к счету string сумму number.
// Создайте enum FuelCost, в котором поместите несколько видов топлива и их цену
// Для каждого класса создайте поле `fuelType`;
// В методе `refuel` добавьте расчет суммы за топливо с учетом типа топлива и заправляемого объёма 
//(до заправки в машине может оставаться топливо)





export class Bills {
    private static debtsAmount: Map<string,number>;
    constructor(debtsAmount: Map<string,number>){
        Bills.debtsAmount = debtsAmount
    }
    public static getBill(param:string):number{
        if(Bills.debtsAmount.has(param))
        return Bills.debtsAmount.get(param);
    };
    public static addBill(param:string, sum:number):void{
        if(Bills.debtsAmount.has(param)){
            const currentSum = Bills.debtsAmount.get(param);
            Bills.debtsAmount.set(param, currentSum+sum)
        } else  Bills.debtsAmount.set(param, sum)
    };
    public static sumBill():number{
        let sum = 0;
        for (let amount of Bills.debtsAmount.values()) {
            sum+=+amount;
          }
          if(!Bills.debtsAmount.has("tax")) Bills.debtsAmount.set("tax", 0)
          if(sum >10000){
            sum =Bills.debtsAmount.get("tax");
            for (let entry of Bills.debtsAmount) { 
                if(entry[0]!=="tax"){
                    Bills.debtsAmount.set("tax", entry[1]*1.2)
                    sum+=+entry[1]*1.2;
                }
            }            
          }
          return sum;
    }
}