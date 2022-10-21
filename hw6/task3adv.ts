// #### Task 3 🖥

// Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется
//  во втором и третьем объекте. Объекты должны быть описаны с помощью типа или интерфейса

// ```javascript
// const cat = {
//       name: 'Енчик',
//       age: 3,
//    }
// ```

type Cat = {
    name : string,
    age : number
}
 const cat :Cat ={
      name: 'Енчик',
      age: 3,
 }

 const firstClone :Cat = { ...cat};
 //@ts-ignore
 const secondClone :Cat = JSON.parse(JSON.stringify(cat));// Здесь хотела сделать через structuredClone но в консоль упала ошибка
                                                          //const secondClone :Cat = structuredClone(cat);
                                                          //ReferenceError: structuredClone is not defined
 
 cat.age = 4;
 if((cat.age !== firstClone.age)&&(cat.age !== secondClone.age))
 console.log("при изменении поля в 1ом объекте, это же поле не меняется во втором и третьем объекте");
