// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны (должно работать при изменении количества и названий свойств объекта)

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```

    let student1 = {
        name: 'Polina',
        age: 27,
        age1: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
const isEqual = (obj1:object, obj2:object)=>{
    for (const i in obj1){
        const key = i as keyof typeof obj1;
        if((!(key in obj2))||(obj1[key] !== obj2[key])){
            return console.log("Объекты не равны");   
        }
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return console.log("Объекты не равны");    
    }
    console.log("Объекты равны");   
}
isEqual(student1,student2);