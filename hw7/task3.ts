// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
const numbers1 = [...numbers];
numbers1.splice(0,5);
console.log(numbers1);

// в закомментированном куске хотела использовать .pop() или .shift() столько раз, 
//сколько элементов в массиве. Но почему-то цикл срабатывал только 3 раза

// for (const key in numbers){
//     numbers.shift();
// }

// console.log(numbers.length);
// for (let i=0; i<numbers.length; i++){
//     numbers.pop();
//     console.log(i);
// }


numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);
