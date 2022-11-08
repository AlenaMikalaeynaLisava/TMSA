// + Реализуйте приложение:
//     + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
//     + Напишите 2 функции `getTodos` & `getTasks`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
//         + Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет) и 
//         возвращает массив объектов c айди и названием задачи, {id:number; title: string}[] для всех завершенных или 
//         незавершенных (в зависимости от значения параметра) задач 
//         + Вывести полученный результат в консоль

import fetch from 'node-fetch';
const url1 = "https://jsonplaceholder.typicode.com/todos";
//@ts-ignore
const getTodos = async function(url:string):Promise<T>{

    let response = await fetch(url);
    let result = await response.json();
    return result
  }

  type Ress = {
    id : number,
    status : boolean
}

    type Ress1 =  {
        userId: number,
        id: number,
        title: string,
        completed: boolean
      }


  const getTasks = async function(){
    const neArr:Ress[] = [];

    let response = await getTodos(url1);
    console.log(response)
    response.forEach((item:Ress1)=>{
        const res:Ress = {
            id : item.id,
            status : item.completed
        };
        neArr.push(res)
    })
    console.log(neArr)
  }
getTasks()
 