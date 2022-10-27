// #### Task 5 

// Есть случайный массив. Сложить и вывести в консоль все индексы элементов:
// строк, содержащих "w"
// чисел > 100
// Подсказка: в функции, которая передается в findIndex второй аргумент - индекс текущего элемента

const arr: (string|number)[]= ["shdiprw", "wnjsdury", 123, 56, 89, 120, "ret"];
const regexp = /w/;

// первый способ
let sum :number =0;
for(const key in arr){
    if ((""+arr[key]).match(regexp) || +arr[key]>100) sum += +key;
}

console.log(sum);

// второй способ

let index :number =0;
let sum1 :number =0;
while(index>=0 && index<arr.length){
    function findSm(item:string|number, ind:number){
        if(ind>index){
            return (""+ item).match(regexp) || +item>100;
        }
        
    }
    index = arr.findIndex(findSm);
    if(index>=0)
    sum1 += index;
}
console.log(sum1)