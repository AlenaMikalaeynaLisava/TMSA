
// #### Task 7 💻

// Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции


const countFactorial = (numberF:number):number=>{
    if (numberF==1){ 
return numberF
    } else return numberF * countFactorial(numberF-1)
}
console.log(countFactorial(5));