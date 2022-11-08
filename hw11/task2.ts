// + Реализуйте приложение:
//     + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
//     + Напишите 2 функции `getTodos` & `getTasks`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
//         + Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет) и 
//         возвращает массив объектов c айди и названием задачи, {id:number; title: string}[] для всех завершенных или 
//         незавершенных (в зависимости от значения параметра) задач 
//         + Вывести полученный результат в консоль

import fetch from 'node-fetch';
const url1 = "https://jsonplaceholder.typicode.com/todos"
const getTodos = async function(){
    let response = await fetch(url1);
    let result = await response.json();
    return result
  }


  const getTasks = async function(){
    //@ts-ignore
    const neArr = [];

    let response = await getTodos();
    console.log(response)
    type Ress = {
        id : number,
        status : boolean
    }
    //@ts-ignore
    response.forEach((item)=>{
        const res:Ress = {
             //@ts-ignore
            id : item.id,
             //@ts-ignore
            status : item.completed
        };
        neArr.push(res)
    })
    //@ts-ignore
    console.log(neArr)
  }
getTasks()
 