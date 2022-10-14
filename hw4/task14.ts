const readline14 = require("readline-sync");

// Task 14 💻

//Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции

const start14 = parseInt(readline14.question("Type a number "));
const end14 = parseInt(readline14.question("Type a number "));
if(start14 > end14){
    console.log(Math.floor(Math.random()*(end14-start14)) +start14)
} else {
    console.log(Math.floor(Math.random()*(start14-end14)) + end14)
}
