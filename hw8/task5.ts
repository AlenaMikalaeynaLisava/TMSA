// #### Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const res = numbers.find((item:number)=> !(item%2));
console.log(res)