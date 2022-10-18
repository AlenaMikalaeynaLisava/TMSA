//#### Task 2 💻

//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент 
//и верните результат переплаты по кредиту:

//+ процентная ставка в год — 17%,
//+ количество лет — 5.

//> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
const percentPerYear :number = 17;
const years = 5;
let yearcount :number =0;
let money = 100;

const getOverpayment = (credit:number, years:number):number=>{
    credit = credit + credit*percentPerYear/100;
if(years == 1){
    return credit - money;
}
else {
    return getOverpayment(credit, years-1);
}
}
console.log(getOverpayment(money, years));

//Способ 2

let sum : number =0;
const overpayment = (credit:number) :number=>{
sum = credit+ credit*percentPerYear/100;
if(yearcount<years-1){
yearcount++;
overpayment(sum);
} 
return sum - money;
}
console.log(overpayment(money));