// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]

    for(const key in matrix){
        if(matrix[key].length%2){
            const middleKey = Math.floor(matrix[key].length/2);
            console.log(matrix[key][middleKey])
        } else  console.log("В массиве нет среднего значения, так как он имеет четное количество элементов")
        }
    