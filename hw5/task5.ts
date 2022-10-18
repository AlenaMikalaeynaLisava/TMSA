//#### Task 5 💻

//Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
//найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

// ```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// ```

const getSum = (a:number, b:number):number =>{
    let sum: number = 0;
    if(a<b){
while(a<=b){
    sum += a;
    a++
}
    } else if(b<a){
        while(b<=a){
            sum += b;
            b++
        }

    }else sum = a;

    return sum;
}

console.log(getSum(1, 1));