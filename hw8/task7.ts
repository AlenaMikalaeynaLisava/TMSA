// #### Task 7 🖥

// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
//  Реализуйте оба варианта, когда результирущее значение true или false


const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numbers2 = [11, 8, 2];


const bool = numbers1.every(item => {
    const newItem =  item*item;
    const strItem = newItem.toString();
    const temparr = strItem.split('');
    return  temparr.reduce((accumulator, item)=> accumulator + +item, 0) % 2 === 0
    })


console.log(bool)