// #### Task 6 🖥

// Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. 
// Затем данные записать в обьект. 
// Второй метод принимает данные пользователя и объект зарегестрированного пользователя. 
// Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**. 



type User ={
    login:string,
    password:string
}
type Valid ={
    getUserData:Function,
    isUserKnown2:Function
}
const getUserData = (login:string, password:string, obj:User):void=>{
    obj.login = login;
    obj.password = password;
   }

const isUserKnown = (currentUser:User, knownUser:User):void=>{
    let counter =0;
    for (const i in currentUser){
        const key = i as keyof typeof currentUser;
        if(currentUser[key]==knownUser[key]) counter++
    }
    if (counter == 2) console.log("**Добро пожалоВать**")
}
const validator : Valid ={
    getUserData : getUserData,
    isUserKnown2 : isUserKnown
}

const knownUser : User={
    login : "M",
    password : "tt"
}

let currentUser1 : User={
    login : "",
    password : ""
}



validator.getUserData("Mm","tt",currentUser1);
validator.isUserKnown2(currentUser1,knownUser);
