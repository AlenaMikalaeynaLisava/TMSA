//#### Task 3 💻

//Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
//+ строку
//+ значение от
//+ значение по

//После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

const trimString= (str:string, start:number, end:number) :string=>{
return str.slice(start-1, end);
}
console.log(trimString("hfjtyridk",2,7));