//#### Task 2 💻

//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент 
//и верните результат переплаты по кредиту:

//+ процентная ставка в год — 17%,
//+ количество лет — 5.

//> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
const percentPerYear :number = 17;
const years = 5;
let yearcount :number =0;
const money = 100;
let wholeMoney :number=0;

const getOverpayment = (credit:number, years:number):number=>{
let temp = credit + credit*percentPerYear/100
credit = temp-temp/years;
wholeMoney += temp/years;
if(years == 1){
return wholeMoney
}
else {
return getOverpayment(credit, years-1);
}
}
getOverpayment(money, years);
