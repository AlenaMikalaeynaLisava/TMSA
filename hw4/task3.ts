const readline3 = require("readline-sync");


//Task 3 💻

//Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке.
// Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`

const newStr = "ghyhijkul;lljnbbhili";
const position = readline3.question("Type a number ");
const num = parseInt(position);

if(num> newStr.length-1){
console.log("Вы вышли за границу строки")
}
