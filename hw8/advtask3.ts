// #### Task 3. 
// Пользователь вводит что-либо. 
// Посчитать и вывести сумму цифр в тексте (используя Array.from, reduce)
// По 1, 2 и 3 символам в введённой строке вывести общее количество таких символов



import { ServerResponse } from "http";
import { StringDecoder } from "string_decoder";
const readline1 = require("readline-sync");
const string = readline1.question("Type something ");

const getResult = (string:string)=>{
    const arr = Array.from(string);
    for(let i=0; i<3; i++){
        let sum =0;
        arr.forEach((item)=>{
            if (item===arr[i]) sum++
        })
        console.log(`количество ${arr[i]} в строке - ${sum} штук`)
    }
}

const countQuantity = (string:string)=>{
    const arr = Array.from(string);
    return arr.reduce((sum:number, value:string|number)=>{
        return !isNaN(+value)?sum + +value:sum
      }, 0);
}


getResult(string);
console.log(countQuantity(string));
