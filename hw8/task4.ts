// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const newFib = fibonacci.reduce(function(accumulator:number, item:number){
  return  accumulator + item;
})

const newFib1 = fibonacci.reduce((accumulator:number, item:number)=> accumulator + item);

console.log(newFib);
console.log(newFib1);