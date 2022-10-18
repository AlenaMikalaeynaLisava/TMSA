// #### Task 4 👨‍🏫
// Пользователь вводит 2 числа (числа могут быть целые и дробные, дробные могут через точку или запятую) 
// через пробел и еще через пробел знак +-*/%. Вывести результат действия или запросить еще раз, если что-то введено неправильно 
// (1 число вместо 2, среди числа непонятные символы, неправильный знак)

const readline = require("readline-sync");
const f =()=>{
    let value:string = readline.question("Введите через пробел два чилса и еще через пробел один из следующих знаков +-*/%\n");
    const arr = value.split(" ");
    if(arr.length!==3){
        console.log("меньше 3 символов введено")
        f();
        return 0
    } else{
        const first = arr[0].replace(",", ".");
        const second =arr[1].replace(",", ".");
        if(isNaN(+first)||isNaN(+second)){
            f();
        }
        switch(arr[2]){
            case "+":
                console.log( +first + +second);
                break;
            case "-":
                console.log (+first - +second);
                break;
            case "*":
                console.log(+first * +second);
                break;
            case "/":
                console.log (+first/+second);
                break;
            default:
                f();
        }
    }
}
f();