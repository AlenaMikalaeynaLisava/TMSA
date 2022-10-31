// #### Task 6 🖥

// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
// Реализуйте оба варианта, когда результирущее значение true или false

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numbers2 = [5, 9, 15, 24, 54, 10, 13, 99, 1, 5];
const isMultiple = (arr: number[]) =>{
  return  arr.some(function(item:number){
        return (!(item % 3)) && (!(item % 5))
    })
}
const isMultiple1 = (arr: number[]) =>arr.some((item:number)=>(!(item % 3)) && (!(item % 5)));

console.log(isMultiple(numbers1));
console.log(isMultiple1(numbers2));