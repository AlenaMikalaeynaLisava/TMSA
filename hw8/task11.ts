// #### Task 11 🖥

// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. 
// Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано 
// - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 

interface Iobj {
    name?: string;
    surname?: string;
    age?: string;
    occupation?: string;
}
const obj: Iobj = {name: 'Петр', surname: 'Петров', age: '20 лет', };
const {name:string= 'Аноном', surname= 'Анонимович', age= '? лет', occupation = "smth"} = obj;
console.log(occupation);