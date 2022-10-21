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
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
const isEqual = (obj1:object, obj2:object)=>{
    let firstKeyAmount =0;
    let secondKeyAmount =0;
    for (const i in obj2){
        const key = i as keyof typeof obj2;
        secondKeyAmount ++;
    }
    for (const i in obj1){
        const key = i as keyof typeof obj1;
        firstKeyAmount ++;
        if((!(key in obj2))||(obj1[key] !== obj2[key])){
            console.log("Объекты не равны");   
            return
        }
    }
    if(firstKeyAmount !== secondKeyAmount){
        console.log("Объекты не равны");   
        return
    }
    console.log("Объекты равны");   
}
isEqual(student1,student2);