const readline17 = require("readline-sync");

// Task 17 💻
//Попросить пользователя ввести что-либо. 
//Вывести, сколько секунд он писал (с математическим округлением) и сумму всех цифр в тексте

const start = Date.now();
const text = readline17.question("Type a string ");
const end = Date.now();
console.log(Math.round(+end-+start));
const regexp = /\d/g;
const a = text.match(regexp);
let s =0;
for (let i=0; i<a.length; i++){
s +=+a[i];
}
console.log(s);