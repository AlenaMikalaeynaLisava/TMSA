const readline = require("readline-sync");

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

let number = parseInt(readline.question("Введите цифру из меню: \n1. Калькулятор\n2. Предсказание\n3. Игра угадай\n"));
while(number>3||number<1||isNaN(number)){
console.clear();
console.log("Неправильный ввод. Попробуйте еще раз");
number = parseInt(readline.question("Введите цифру из меню: \n1. Калькулятор\n2. Предсказание\n3. Игра угадай\n"));
} 
if(number<=3&&number>=1){
    console.log(number)
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
        const today = new Date();
        const currentYear = +today.getFullYear();
        console.log(currentYear);
        console.log(`Имя вашего отца начинается с ${patronymic.substring(0,3)}`);
        console.log(`Вы родились в ${currentYear - +age} году`);
        console.log(`Вероятно, но не точно, что в прошлой жизни вы были ${animal.split(' ')[1]}`);
        break;  
    default :
    const stringDef = readline.question("Введите строку (от 5 до 15 символов) или число (от 5 до 15) ");
    if(!isNaN(+stringDef )){
        const max = +stringDef > 15 ? 15:+stringDef;
        const min =5;
        const randomN = Math.floor(Math.random()*(max-min))+min;
        const maxIter = Math.floor((max-min)/3);
        for (let i=0; i<maxIter; i++){
            const guessNum = parseInt(readline.question(`Угадайте число от 5 до ${max}`));
            if(+guessNum === randomN){
                console.log("Поздравляем, Вы выиграли");
                break
            }
            else{
                if(i<(maxIter-1))
                console.log("А вот и нет. Еще варианты?");
                else console.log("Вы проиграли");
            }
        }

    } else {
        const max = stringDef.length-1 > 15 ? 15 : stringDef.length-1;
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
}
}
//console.log(number)

