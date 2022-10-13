// Task 1 💻

//Пользователь передает через переменную свою фамилию и имя. 
//Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр
const readline = require("readline-sync");
const fullName = readline.question("Type your name and surname ");
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

//Task 2 💻

//Дана строка 'я учу typescript!'. 
//Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку
// `Данной подстроки нет`

const string = "я учу typescript!";
const word = readline.question("Type a word ");

if(string.includes(word)){
    console.log(string.indexOf("учу"));
} else {
    console.log("Данной подстроки нет");
}

//Task 3 💻

//Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке.
// Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`

const newStr = "ghyhijkul;lljnbbhili";
const position = readline.question("Type a number ");
const num = parseInt(position);

if(num> newStr.length-1){
console.log("Вы вышли за границу строки")
}


// Task 4 💻

//Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет.
// Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки`

const newStr4 = "This day is grate!";
const lastSymbol = newStr4[newStr4.length-1];

if(lastSymbol === ".")
    console.log("Данное предложение закончено");
    else
    console.log("В конце предложения не хватает точки");


// Task 5 💻

//Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).

const str5 = "я учу typescript!";
const start1 = str5.indexOf("учу");
const end1 = start1 + "учу".length;
const study = str5.slice(start1, end1);
const start2 = str5.indexOf("typescript");
const end2 = start2 + "typescript".length;
const typesc = str5.substring(start2, end2);
console.log(study);
console.log(typesc);


// Task 6 💻

//Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

const str6 = "я учу typescript!"
const arr = str6.split(' '); //Здесь получится, что последнее слово typescript! Их возможно тоже нужно разделить?


// Task 7 💻

//Дана строка '                я учу typescript!                '. Выведите строку, без начальных и пробелов в конце строки.

const str7 = "                я учу typescript!                ";

console.log(str7.trim());


// Task 8 💻

//Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки

const number8 = 8.829734872948;

console.log(number8.toFixed(3));


// Task 9 💻

//Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. 
//Если является - вывести его, если нет - округлить до целой части.

const someNum = parseInt(readline.question("Type a number "));

if(Number.isInteger(someNum))
console.log(someNum);
else console.log(Math.round(someNum));


// Task 10 💻

//Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, 
//большего аргумента и ближайшего целого числа.

const num10 = parseInt(readline.question("Type a number "));
const floor = Math.floor(num10);
const ceil = Math.ceil(num10);
const round = Math.round(num10);



// Task 12 💻

//Дана произвольное число. Реализовать метод возводящий число в степень. 
//Степень возведения указывается как параметр к методу.

const num12 = parseInt(readline.question("Type a number "));
const power = parseInt(readline.question("Type a power "));
console.log(Math.pow(num12, power))


// Task 14 💻

//Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции

const start14 = Math.floor(parseInt(readline.question("Type a number ")));
const end14 = Math.floor(parseInt(readline.question("Type a number ")));
if(start14 > end14){
    console.log(Math.floor(Math.random()*(end14-start14)) +start14)
} else {
    console.log(Math.floor(Math.random()*(start14-end14)) + end14)
}



// Task 15 💻

//Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции

const start15 = parseInt(readline.question("Type a number "));
const end15 = parseInt(readline.question("Type a number "));
if(start15 > end15){
    console.log(Math.random()*(end15-start15) +start15)
} else {
    console.log(Math.random()*(start15-end15) + end15)
}



// Task 16 💻

//Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.".
// Использовать только внутренние методы Date.

const date : Date = new Date();
console.log(`текущая дата: ${date.getMonth()+1}/${date.getFullYear()}/${date.getDate()}. Текущее время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`)


// Task 17 💻
//Попросить пользователя ввести что-либо. 
//Вывести, сколько секунд он писал (с математическим округлением) и сумму всех цифр в тексте

const start = Date.now();
const text = readline.question("Type a string ");
const end = Date.now();
console.log(Math.round(+end-+start));
const regexp = /\d/g;
const a = text.match(regexp);
let s =0;
for (let i=0; i<a.length; i++){
s +=+a[i];
}
console.log(s);


// #### Task 18 Advanced 💻
// Вывести сообщение пользователю (отображаться должно в несколько строк): 
// "Введите цифру из меню:
// 1. Калькулятор
// 2. Предсказание
// 3. Игра угадай"
// Пользователь должен ввести число от 1 до 3. 
// Если вводится что-то другое, то отображается "Неправильный ввод. Попробуйте еще раз" и то же самое меню (можно использовать console.clear() для очистки консоли).
// ###### В случае выбора 1 пользователю предлагается ввести 2 числа и действие из списка (можно вывести также в виде выбора пунктов меню):
// Сложение
// Вычитание
// Умножение
// Деление
// Возведение в степень
// Остаток от деления 1 числа на 2
// ###### В случае выбора 2 пользователю последовательно предлагается ввести отчество, возраст и 3 любых животных в формате "конь, пёс, жираф". 
// После вопросов вывести:
// Имя вашего отца начинается с <3-5 первых букв отчества>
// Вы родились в *** году
// Вероятно, но не точно, что в прошлой жизни вы были <одно из введенных животных>
// ###### Пользователю предлагается ввести строку (от 5 до 15 символов) или число (от 5 до 15). Далее пользователь должен угадать:
// Число (n): если число больше 20, то берётся 20, рандомно берется число от 1 до n. 
// Строка (n - длина строки): если строка больше 20 символов, то используются только первые 20, рандомно берется символ строки.
// У пользователя n / 3 (округление в большую сторону) попыток угадать число либо символ.
// При правильном ответе: "Поздравляем, Вы выиграли"
// При неправильном: "А вот и нет. Еще варианты?"
// Если закончились попытки, но ответ неправильный: "В этот раз как-то не удалось, заходите еще"

let number = Math.floor(parseInt(readline.question("Введите цифру из меню: \n1. Калькулятор\n2. Предсказание\n3. Игра угадай\n")));
if(number>3||number<1){
    console.log("Неправильный ввод. Попробуйте еще раз");
    console.clear();
    number = readline.question("Введите цифру из меню: \n1. Калькулятор\n2. Предсказание\n3. Игра угадай\n");
} else {
    switch(number){
        case 1:
            let case1 = readline.question("Введите два числа и цифру из меню: \n1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление\n5. Возведение в степень\n6. Остаток от деления 1 числа на 2\n "); 
            const arr = case1.split(" ");
            const num1 = +arr[0];
            const num2 = +arr[1];
            const num3 = +arr[2]
            console.log( num1, num2, num3)
            switch(num3){
                case 1:
console.log(num1 + num2);
break;  
                case 2:
                    console.log(num1 - num2);
                    break;  
                case 3:
                    console.log(num1 * num2);
                    break;  
                case 4:
                    console.log(num1 / num2);
                    break;  
                case 5:
                    console.log(Math.pow(num1, num2));
                    break;  
                case 6:
                    console.log(num1 % num2);
            break;        
            }   
            break;
        case 2:
            let patronymic = readline.question("Введите отчество\n");
            let age = readline.question("Введите возраст\n");
            let animal = readline.question("Введите 3 любых животных в формате конь, пёс, жираф\n");
            console.log(`Имя вашего отца начинается с ${patronymic.substring(0,3)}`);
            console.log(`Вы родились в ${2022 - +age} году`);
            console.log(`Вероятно, но не точно, что в прошлой жизни вы были ${animal.split(' ')[1]}`);
            break;  
        default :
        const stringDef = readline.question("Введите строку (от 5 до 15 символов) или число (от 5 до 15) ");
        const strT = parseInt(stringDef);
        if(strT){
            const randomN = Math.floor(Math.random()*(15-5))+5;
            for (let i=0; i<Math.floor((15-5)/3); i++){
                const guessNum = parseInt(readline.question("Угадайте число от 5 до 15 "));
                if(+guessNum === randomN){
                    console.log("Поздравляем, Вы выиграли");
                    break
                }
                else{
                    if(i<(Math.floor((15-5)/3)-1))
                    console.log("А вот и нет. Еще варианты?");
                    else console.log("Вы проиграли");
                }
            }

        } else {
            const max = stringDef.length-1;
            const randomS = Math.floor(Math.random()*max);
            for (let i=0; i<Math.floor((max+1)/3); i++){
                const guessSymb = parseInt(readline.question("Угадайте символ из введенной строки "));
                if(guessSymb === stringDef[randomS]){
                    console.log("Поздравляем, Вы выиграли");
                    break
                }
                else{
                    if(i<(Math.floor((max+1)/3)-1))
                    console.log("А вот и нет. Еще варианты?");
                    else console.log("Вы проиграли");
                }
            }

        }
        //console.log(strT);
        //const type = stringDef
        // const numDef = parseInt(readline.question("Угадайте число от "));
        // const stmbDef = readline.question("Введите строку (от 5 до 15 символов) или число (от 5 до 15) ");
    }
}
//console.log(number)

