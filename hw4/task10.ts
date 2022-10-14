const readline10 = require("readline-sync");

// Task 10 💻

//Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, 
//большего аргумента и ближайшего целого числа.

const num10 = parseInt(readline10.question("Type a number "));
const floor = Math.floor(num10);
const ceil = Math.ceil(num10);
const round = Math.round(num10);

