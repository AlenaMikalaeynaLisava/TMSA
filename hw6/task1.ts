// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const anyObject : object ={
    firstProperty : "firstProperty",
    secondProperty: "secondProperty"
};

delete (anyObject as any).firstProperty;
delete (anyObject as any).secondProperty;

console.log(anyObject);