
//#### Task 4 💻

//Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

//> Для 2021 это будет 5.

const getSumNumbers = (num:number):number=>{
    let string = ""+num;
    let summa:number = 0;
    for (let i=0; i<string.length; i++){
        summa += +string[i];
    }
    return summa;
}
console.log(getSumNumbers(2021))