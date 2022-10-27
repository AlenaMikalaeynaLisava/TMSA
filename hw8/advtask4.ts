// #### Task 4. 
// Написать функцию, которая принимает: 
// массив чисел
// объект {from: number, to: number, includeFrom?: boolean, includeTo?: boolean}
// Вернуть true, если все числа из массива входят в диапазон
// includeFrom и includeTo показывают, включать from и to в диапазон или нет


interface Myobj {
    from: number, 
    to: number, 
    includeFrom?: boolean, 
    includeTo?: boolean,
}


const isInDiapazone = (arr:number[], obj:Myobj)=>{
    return arr.every((item)=>{
        if(obj.includeFrom&&obj.includeTo) return item>=obj.from && item<=obj.to
        else if(obj.includeFrom) return item>=obj.from && item<obj.to
        else if(obj.includeTo) return item>obj.from && item<=obj.to
        else return item>obj.from && item<obj.to
    })
}

const obj:Myobj={
    from: 5, 
    to: 8, 
   includeFrom: true, 
   includeTo: true,
}

const arr = [5, 6, 7, 8]
console.log(isInDiapazone(arr, obj))
