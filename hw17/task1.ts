// #### Task 1 💻
// - Реализовать класс калькулятор, который принимает имеет несколько методов 
// (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и 
// принимает 2 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных тестов (методов) по 
// вызову данных функции, которые в зависимости от переданных аргументов и ожидаемого 
// результата выводит либо: что "тест" прошел, либо что "тест" свалился


class Calc {
    sum(num1: number, num2: number) {
        return num1+num2
    }
    subtrac(num1: number, num2: number) {
        return num1-num2
    }
    multiply(num1: number, num2: number) {
        return num1*num2
    }
    divide(num1: number, num2: number) {
        return num1/num2
    }
    pow(num1: number, num2: number) {
        return  Math.pow(num1, num2)
    }
   
}


function sumUnit(arg1: any, arg2: any, expectedResult: any) {
    const result = new Calc().sum(arg1, arg2);
    if(result === expectedResult) console.log(`Test sum ${arg1}, ${arg2}, ${expectedResult} success`);
    else throw new Error(`Test sum ${arg1}, ${arg2}, ${expectedResult} failed`)
}
function subtracUnit(arg1: any, arg2: any, expectedResult: any) {
    const result = new Calc().subtrac(arg1, arg2);
    if(result === expectedResult) console.log(`Test subtrac ${arg1}, ${arg2}, ${expectedResult} success`);
    else throw new Error(`Test subtrac ${arg1}, ${arg2}, ${expectedResult} failed`)
}
function multiplyUnit(arg1: any, arg2: any, expectedResult: any) {
    const result = new Calc().multiply(arg1, arg2);
    if(result === expectedResult) console.log(`Test multiply ${arg1}, ${arg2}, ${expectedResult} success`);
    else throw new Error(`Test multiply ${arg1}, ${arg2}, ${expectedResult} failed`)
}

function divideUnit(arg1: any, arg2: any, expectedResult: any) {
    const result = new Calc().divide(arg1, arg2);
    if(result === expectedResult) console.log(`Test divide ${arg1}, ${arg2}, ${expectedResult} success`);
    else throw new Error(`Test divide ${arg1}, ${arg2}, ${expectedResult} failed`)
}

function powUnit(arg1: any, arg2: any, expectedResult: any) {
    const result = new Calc().pow(arg1, arg2);
    if(result === expectedResult) console.log(`Test pow ${arg1}, ${arg2}, ${expectedResult} success`);
    else throw new Error(`Test pow ${arg1}, ${arg2}, ${expectedResult} failed`)
}

sumUnit(5, 7, 12); 
sumUnit('5', '7', '12'); 
subtracUnit(-5, 7, 2);
subtracUnit(5.6, -5.6, '0');
multiplyUnit(1000, 5000, 1);
multiplyUnit(-3, 0.3, -0.9);
divideUnit('gh', 7, 'gh/7');
divideUnit(15, 3, 5);
powUnit(-3, -3, -27);
powUnit(5, -2, 0.025);



