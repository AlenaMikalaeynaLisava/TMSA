// #### Task 6 💻

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function foo():void{
    console.log("foo");
}
 function boo():void{
    console.log("boo");
}
const fooboo = (boolValue : boolean, foo:Function, boo:Function):void=>{
    boolValue === true?foo():boo();
}

fooboo(false, foo, boo);