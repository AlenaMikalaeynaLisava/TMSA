// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все 
// числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

const arr :number[] = [];
const arrLength :number =6;
const arrPow :number[] = [];

for (let i=0; i<arrLength; i++){
    const value = Math.random()*100;// можно было рандомно еще минимум и максимум задать
    arr.push(value);
    const pow = Math.pow(value,3);
    arrPow.push(pow);
}

console.log(arr);
console.log(arrPow);