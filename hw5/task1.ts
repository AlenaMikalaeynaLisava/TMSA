//#### Task 1 💻

//Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 

//> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)


const getSum = (n:number):number =>{
    let result =0;
    for (let i=0; i<=n; i++){
        result +=i
    }
return result
}

getSum(100);