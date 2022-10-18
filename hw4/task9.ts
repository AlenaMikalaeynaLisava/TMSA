const readline9 = require("readline-sync");

// Task 9 💻

//Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. 
//Если является - вывести его, если нет - округлить до целой части.

const someNum = parseFloat(readline9.question("Type a number "));

if(Number.isInteger(someNum))
console.log(someNum);
else console.log(Math.round(someNum));