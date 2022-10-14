// Task 1 💻

//Пользователь передает через переменную свою фамилию и имя. 
//Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр
const readline1 = require("readline-sync");
const fullName = readline1.question("Type your name and surname ");
const name1 = fullName.split(' ')[0];
const surname = fullName.split(' ')[1];

if(name1 && surname){
    console.log(`Привет ${name1} ${surname}`);
    console.log(`Привет ${name1.toUpperCase()} ${surname.toLowerCase()}`);
    console.log(`Привет ${name1.toUpperCase()} ${surname.toUpperCase()}`);
    console.log(`Привет ${name1.toLowerCase()} ${surname.toUpperCase()}`);
    console.log(`Привет ${name1.toLowerCase()} ${surname.toLowerCase()}`);
} else {
    console.log(`Name is not correct`);
}