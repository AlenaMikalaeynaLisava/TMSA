// Task 5 💻

//Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).

const str5 = "я учу typescript!";
const start1 = str5.indexOf("учу");
const end1 = start1 + "учу".length;
const study = str5.slice(start1, end1);
const start2 = str5.indexOf("typescript");
const end2 = start2 + "typescript".length;
const typesc = str5.substring(start2, end2);
console.log(study);
console.log(typesc);
