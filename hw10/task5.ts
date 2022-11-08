// #### Task 5 💻

// Опишите статическую функцию класса, которая принимает Generic параметр одного из типов: boolean, number или string. 
// И возвращает:
// для boolean: противоположное значение
// для string: если в строке есть скобки, то вывести, не забыли ли закрыть скобку, если нет - `скобок нет`
// для числа n: целое число, квадрат которого наиболее близок к n (`1 для n=1,2,3`, `2 для n=4,5,6,7,8`, `3 для 9,10,11...`)
// Проверить функцию на все 3 типа


class NumberParser {
    param: boolean|number|string;
        constructor(param:  boolean|number|string) {
        this.param = param;
    }
  
    static parse<T extends boolean|number|string>(param:T):boolean|number|string|void {
       // let res:<T>;
        switch(typeof param) {
            case 'boolean':
                return !param;
            case 'string':
                return (param.includes("(")&&(!param.includes(")")))?"не забыли ли закрыть скобку?":"Все ок";            
            case 'number':
                const num = Math.sqrt(param);
                
                return Math.floor(num);
               // return Math.abs(minNum*minNum-param)<Math.abs(maxNum*maxNum-param)?Math.floor(num):Math.ceil(num);
            default: 
              console.log("the type is different")
        }
    }
}


console.log(NumberParser.parse(true));
console.log(NumberParser.parse("Something with ()"));
console.log(NumberParser.parse(8));
