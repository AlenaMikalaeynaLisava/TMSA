//Task 2 💻

//Дана строка 'я учу typescript!'. 
//Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку
// `Данной подстроки нет`
const readline2 = require("readline-sync");
const string = "я учу typescript!";
const word = readline2.question("Type a word ");

if(string.includes(word)){
    console.log(string.indexOf("учу"));
} else {
    console.log("Данной подстроки нет");
}