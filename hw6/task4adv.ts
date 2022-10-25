// #### Task 4 🖥

// Есть объект с количеством купюр и монет в кассе:
// ```javascript
// const obj = {1: 45, 2: 7, 5: 10, 10: 23, 20: 51}
// ```
// Пришло 2 покупателя с купюрой 50.
// Первому выдана сдача {2: 3, 5: 2, 20: 1}
// Второму выдана сдача {1: 4, 5: 1, 10: 2, 20: 1}
// Вывести в результате разницу в сумме, отдельно по каждой купюре 

const obj = {1: 45, 2: 7, 5: 10, 10: 23, 20: 51, 50:0};
const objectBeg = {...obj};
const change1 = {2: 3, 5: 2, 20: 1};
const change2 = {1: 4, 5: 1, 10: 2, 20: 1};
const fifty = 50;
const getObjSum = (obj:object, obj1:object)=>{
    //@ts-ignore
    obj['50']=obj['50']+1;
    for (const i in obj){
        const key = i as keyof typeof obj
        if(key in obj1){ 
             //@ts-ignore
            obj[key] = obj[key]-obj1[key];
        }
    }
    return obj;
}
const resultFirst = getObjSum(obj, change1);
const resultSecond =  getObjSum(obj, change2);

for (const i in objectBeg){
    //@ts-ignore
    objectBeg[i] = -objectBeg[i]+obj[i]; // Опять не уверена, что правильно получилось. С минусо это то, что убыло, с + то, что прибыло.
    // Может быть нужно было сдельь по модулю брать?
}
console.log(objectBeg);