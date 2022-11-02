// #### Task 1 💻
// Написать класс, принимающий строку (`str`), число (`symNum`) и символ (`sym`)
// создать геттер, который возвращает есть ли в строке `sym`
// геттер, который возвращает символ `symNum` в строке `str`. 
// Если `symNum` больше, чем символов в `str`, возвращает случайный символ
// метод, который принимает коллекцию Map со строками, 
// и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
// пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`
// вывести все созданные геттеры и поле `str`

class Strings {
    str:string;
    symNum:number;
    sym:string;

    constructor(str:string, symNum:number, sym:string){
        this.str = str;
        this.symNum = symNum;
        this.sym = sym;
    }

    get isSym(){
        return this.str.includes(this.sym)
    }

    get getSymNum(){
        return this.str.includes(String(this.symNum))?this.symNum:"This string doesn't include SymNum"
    }

    returnSymb():string{
    const randomIndex = Math.floor(Math.random()*(this.str.length-1));
       return this.symNum>this.str.length?this.str[randomIndex]:""
    }

    returnStr(map:Map<string,string>):string{
        for (let entry of map) {
            const value = map[1];
            const regexp = new RegExp(map[0], "\g");
            this.str = (this.str.includes(map[0])&& value)?this.str.replace(regexp, value):this.str
          }
        return this.str
    }
}

const newStrings = new Strings("This is a 156 string445", 45, "5");

const map = new Map([["is","-"],["15","er"]]);
console.log(newStrings.isSym);
console.log(newStrings.getSymNum);
console.log(newStrings.returnSymb());
console.log(newStrings.returnStr(map));
