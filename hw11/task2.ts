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


type TToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
    }
    
    const getTodos = async function(url:string){
        let response = await fetch(url);
        return  response.json() as Promise<TToDo[]>;
      }



    const getTasks = async function(userId: number, status: boolean) {
        let response = await getTodos(url1);
        response = response.filter(el => el.userId === userId && el.completed === status)
        return response.map(el => {return {id: el.id, title: el.title}})
    }

    getTasks(1, true)
    .then(res => console.log(res));

