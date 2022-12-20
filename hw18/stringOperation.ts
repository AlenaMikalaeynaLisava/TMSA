export default class StringOperation {
    currentString: string;
    constructor(currentString: string){
        this.currentString = currentString;
    }
    getSymbolQuantity(index: number) {
        const symbol = this.currentString[index];
        let arr:number[] = [];
        let pos = -1;
while ((pos = this.currentString.indexOf(symbol, pos + 1)) != -1) {
  arr.push(pos);
}
        return arr.length;
    }
    getAllSubStrIndex(sub: string) {
        let arr:number[] = [];
        let pos = -1;
while ((pos = this.currentString.indexOf(sub, pos + 1)) != -1) {
  arr.push(pos);
}
        return arr;
    }
    deleteExclude(subStr: string, index: number) {
        const regExp = new RegExp(subStr,'gi')
        console.log(regExp);
        let arr:number[] = [];
        let pos = -1;
while ((pos = this.currentString.indexOf(subStr, pos + 1)) != -1) {
  arr.push(pos);
}
        const n = this.currentString.replace(regExp, (match, offset) =>{
            if(offset!==arr[index])
            return ""
            else return subStr
        })
        console.log(n)
        return n
    }
    changeSymbols(arr1:number[], arr2: number[]){
        if(typeof arr1[0] !== 'number') throw new Error("Error!")
        let n = this.currentString;
        for(let i=0; i<arr1.length; i++){
            n = n.replace(this.currentString[arr1[i]], this.currentString[arr2[i]])
        }

        return n
    }
   
}