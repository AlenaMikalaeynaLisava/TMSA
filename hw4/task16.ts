// Task 16 💻

//Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.".
// Использовать только внутренние методы Date.

const date : Date = new Date();
console.log(`текущая дата: ${date.getMonth()+1}/${date.getFullYear()}/${date.getDate()}. Текущее время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`)
