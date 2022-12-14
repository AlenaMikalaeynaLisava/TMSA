// #### Task 2 👨‍🏫 

// + Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 
// 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

// + Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, 
// но для размера 3 x 1 вы должны сделать два надлома.

// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас
//  нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

const divideChokolade = (n:number, m:number):number => {
 if(n>1 && m>1) return m*n - 1;
 return 0
}

console.log(divideChokolade(3, 4));
console.log(divideChokolade(1,1));