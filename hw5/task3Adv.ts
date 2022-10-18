// #### Task 3 👨‍🏫

// + Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!),
//  пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.

// + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно 
// отформатировав её.

// + Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.

// + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для 
// вашего «баланса банковского счета».

// + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков 
// после запятой.

const tax :number = 20;
const phonePrice :number = 200;
const accessory  :number = 10;
const currency: string = '$';

const taxF = (amount:number , tax:number):number=>{
    return amount*tax/100;
}

const currencyRes = (resTax:number):string=>{
    const resres = resTax.toFixed(2);
    return resres+currency;
}
const totalPhonePurchaseCost =(taxF:Function, currencyRes:Function, accountBalance:number):string=>{
let amount = phonePrice+accessory;
let resTax = taxF(amount, tax) + amount;
const cur = resTax;
while(accountBalance >resTax + cur){
resTax +=cur;
}
const curT = currencyRes(resTax);
console.log(curT);
return curT;
}

totalPhonePurchaseCost(taxF,currencyRes, 1000);