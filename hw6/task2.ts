// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и 
// если есть вывести в консоль **true**


const anyObject2 : object ={
    firstProperty : "firstProperty",
    secondProperty: "secondProperty"
};

for (const i in anyObject2){
    const key = i as keyof typeof anyObject2
    if (key in anyObject2) console.log(true)
}

if("df" in anyObject2)console.log(true)
    else console.log(false)
