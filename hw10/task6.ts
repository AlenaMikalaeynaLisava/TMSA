// #### Task 6 💻
// ! Для enum можно использовать Object.values
// Есть таблица:
// [/*[Товар, Скидка в процентах, Цена без скидки], */[['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], 
// ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]
// Описать enum, где содержатся все доступные товары (числовой или строковый, по желанию)
// Описать функцию, которая принимает параметром один из элементов енама и массив (тип [string, number, number][]) 
// и возвращает сумму со скидкой для этого товара

enum  Products{
    Cucumber = "Огурец",
    Tomato = "Помидор",
    Milk = "Молоко",
    Kefir = "Кефир",
    Salt = "Соль",
    Sugar = "Сахар"
}
const arr10:[string, number, number][] = [   
                ['Огурец', 10, 6.4], 
                ['Помидор', 8, 9], 
                ['Молоко', 5.6, 3.3], 
                ['Кефир', 1, 2.4], 
                ['Соль', 0, 1.09], 
                ['Сахар', 50, 5]
            ]
const func10 = (product:Products, arr:[string, number, number][]):number=>{
    let result = 0;
      arr.forEach((item)=>{
        if(product === item[0])
                result = item[2]-item[2]*item[1]/100;
    })
    return result
}

console.log(func10(Products.Cucumber,arr10))
console.log(func10(Products.Tomato,arr10))