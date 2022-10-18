
//#### Task 4 💻

//Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

//> Для 2021 это будет 5.

const getSumNumbers = (num:number):number=>{
    const arr = ("" + num).split("");
    let summa:number = 0;
    for (let i=0; i<arr.length; i++){
        summa += +arr[i];
    }
    return summa;
}
console.log(getSumNumbers(2021))