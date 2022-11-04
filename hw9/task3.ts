// #### Task 3 💻
// Написать класс, который принимает строку (`str`) и число (`classNum`)
// (число всегда меньше или равно количеству символов в строке)
// написать геттер, который возвращает символ, который наиболее часто повторяется в строке
// и метод, который принимает необязательный параметр - число (`paramNum`).
// (число также всегда меньше или равно количеству символов в строке)
// если число есть, то `num = classNum - paramNum`, если нет, то `num = classNum`
// функция возвращает `str`, в которой часть строки перевёрнута
// если `num < 0`, то первые `num` символов, если `num > 0`, то последние `num` символов
// например строка 
// `str = 'это строка', num = 2, result = 'тэо строка'`
// `num = -2, result = 'это строак'`
// `num = 10, result = 'акортс отэ'`



const stri:string = "это строка";

class Some{
    str:string;
    classNum:number;
    paramNum?: number;
    
    constructor(str:string, _classNum:number, paramNum?:number){
        this.str = str;
        this.classNum = _classNum;
        if(paramNum){
            this.paramNum = this.str.length<paramNum?this.str.length:paramNum;
        }
    }

    set setClassNum(_classNum:number){
        _classNum = this.str.length<_classNum?this.str.length:_classNum;
    };

      // toUpperCase не добавляла, считаем, что регистр чувствительный
    get getSymb(){
        let max=0;
        let maxSymb = '';
        const countSymb = (str:string)=>{
            const arr = str.split("");
            const result = arr.filter(item => item!== arr[0]);
             if(arr.length -result.length>max){
                 max = arr.length -result.length;
                 maxSymb = str[0];
             }
            if(result.length>1){
                const newStr = result.join("");
                countSymb(newStr);
            }
        }
        countSymb(this.str);
        return maxSymb
    };
    meth(paramNum?:number){
        const num = paramNum?this.classNum - paramNum:this.classNum;
        if(num<0){
            const changeStr =  this.str.slice(0, num);
            const notchangeStr = this.str.slice(num);
            const changed = changeStr.split("").reverse().join("");
            return changed.concat(notchangeStr);
        } 
            const notchangeStr =  this.str.slice(0, num);
            const changeStr = this.str.slice(num);
            const changed = changeStr.split("").reverse().join("");
            return notchangeStr.concat(changed);
        
    }
}

const some = new Some("это строка", 5, 20);
console.log(some.getSymb);
console.log(some.meth(some.paramNum));