// #### Task 1 👨‍🏫 

// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, 
// если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

const isTriangle = (a:number, b:number, c:number):boolean=>{
    if((a+b>c)&&(a+c>b)&&(b+c>a)) return true
    else return false
}

console.log(isTriangle(2,3,1))
