// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [7, -4, 32, -90, 54, 32, -21]

const newNumbers = numbers.filter(function(item:number){
  return  item>=0;
})

const newNumbers1 = numbers.filter((item:number)=> item>=0);

console.log(newNumbers);
console.log(newNumbers1);