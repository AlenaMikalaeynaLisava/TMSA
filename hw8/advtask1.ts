// #### Task 1 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const string ="This website is for losers LOL!";

const createNewStr = (string:string)=>{
    const strArr = string.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    const newArr = strArr.filter((item:string)=>{
        return  !vowels.includes(item.toLocaleLowerCase())
     })
    
     console.log(newArr.join(''));
}

createNewStr(string);