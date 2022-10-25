//     #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
// Оба массива затем выведите в консоль. 

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const negArray :number[] = [];
const posArray :number[] = [];

for(const value of mixedNumbers){
    if(value>0) posArray.push(value);
    else negArray.push(value);
}

console.log(posArray);
console.log(negArray);