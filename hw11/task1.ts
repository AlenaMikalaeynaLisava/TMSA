// #### Task 1 💻

// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒 
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. 
// А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Для получения постов использовать https://jsonplaceholder.typicode.com/posts
// Задача может бы ть выполнена через https://jsonplaceholder.typicode.com/comments?postId=1 либо через setTimeout.


import fetch from 'node-fetch';


const arr =[15, 23, 7, 3]

const url = "https://jsonplaceholder.typicode.com/posts"

// arr.forEach((item)=>{
//     fetch(`${url}?id=${item}`)
//     .then(res => res.text())
// .then(text => console.log(JSON.parse(text)))
// .catch((result: Error) => {
//     console.log('Fail result ::: ');
// })
// })



async function showUser(item:number) {
    try {
      let response = await fetch(`${url}?id=${item}`);
      let user = await response.json();
      console.log(user);
    } catch(err) {
      console.log('Fail result ::: '); // TypeError: failed to fetch
    }
  }



arr.forEach((item)=>{
    showUser(item)
})
