// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman'];

for(const key in cats){
    console.log(cats[key]);
}
for(const value of cats){
    console.log(value);
}