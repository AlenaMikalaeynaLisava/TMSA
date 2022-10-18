
const readline12 = require("readline-sync");

// Task 12 💻

//Дана произвольное число. Реализовать метод возводящий число в степень. 
//Степень возведения указывается как параметр к методу.

const num12 = parseFloat(readline12.question("Type a number "));
const power = parseFloat(readline12.question("Type a power "));
console.log(Math.pow(num12, power))