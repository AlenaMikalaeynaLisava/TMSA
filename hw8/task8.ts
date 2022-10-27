// #### Task 8 🖥

// Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
// Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
// Выведите все продукт, количество которых больше 100 гр.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

let salad = new Map();

salad.set("cucumbers", 300);    
salad.set("tomatoes",200);  
salad.set("salt", 10); 
salad.set("sourCream", 110); 

salad.forEach((value, key, map) => {
    if(value>100)
    console.log(key)
  });

  salad.forEach(function (value, key, map){
    if(value>100)
    console.log(key)
  });