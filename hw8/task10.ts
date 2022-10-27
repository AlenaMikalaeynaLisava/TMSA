// #### Task 10 🖥

// Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. 
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - 
// в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 

let arr: string[] =[];
arr[3] ="1";
const arr2:string[] = ["4", "6"];
arr = arr.concat(arr2);
let elem2:string = "";
let elem3:string = "";

const changeElems = (arr:string[])=>{
    if(arr[1]) elem2 = arr[1]
        else elem2 = "bbb"

    if(arr[2]) elem3 = arr[2]
    else elem3 = "eee"    
}

changeElems(arr2);
console.log(elem2);
console.log(elem3);

changeElems(arr);
console.log(elem2);
console.log(elem3);