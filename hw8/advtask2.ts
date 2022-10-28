// #### Task 2 👨‍🏫 Изограммы

// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
// Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```

const str = "Dermatoglyphics";
const str1 = "aba";
const str2 = "moOse";
const isIsogram = (str:string)=>{
    const strTocheck = str.toLocaleUpperCase();
    const strSet = new Set(strTocheck);
    console.log(strTocheck.length === strSet.size);
}

isIsogram(str);
isIsogram(str1);
isIsogram(str2);