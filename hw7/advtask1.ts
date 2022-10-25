// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const isPalindrome =(word:string):boolean=>{
    const arr = word.split("");
    let iterator =0;
    const halfLength = Math.floor(arr.length/2);
    for (let i=0; i<halfLength; i++){
        if(arr[i]===arr[arr.length-1-i]) iterator++;
    }
    return iterator===halfLength ? true:false
}

console.log(isPalindrome("asresa"));