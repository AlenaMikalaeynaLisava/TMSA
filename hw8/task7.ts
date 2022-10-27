// #### Task 7 🖥

// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
//  Реализуйте оба варианта, когда результирущее значение true или false


const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numbers2 = [11, 8, 2];

const countSquareSum = (arr: number[]):number[] =>{
    return arr.map(item => {
         const newItem =  item*item;
         const strItem = newItem.toString();
         const temparr = strItem.split('');
         return temparr.reduce((accumulator, item)=> accumulator + +item, 0)
    })
}
const arrToCheck = countSquareSum(numbers2);
const arrToCheck1 = countSquareSum(numbers1);
console.log(arrToCheck1.every(function(item:number){
        return (!(item % 2))
    }))
console.log(arrToCheck.every((item:number)=>(!(item % 2)))); 