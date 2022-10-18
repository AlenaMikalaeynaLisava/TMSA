const readline15 = require("readline-sync");

// Task 15 💻

//Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции

const start15 = parseFloat(readline15.question("Type a number "));
const end15 = parseFloat(readline15.question("Type a number "));
if(start15 > end15){
    console.log(Math.random()*(end15-start15) +start15)
} else {
    console.log(Math.random()*(start15-end15) + end15)
}
