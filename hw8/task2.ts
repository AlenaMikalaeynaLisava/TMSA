// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива
// будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const newUsers = users.map(function(item:string, index:number){
  return  `member ${index+1}: ${item}`;
})

const newUsers1 = users.map((item:string, index:number)=> `member ${index+1}: ${item}`);

console.log(newUsers);
console.log(newUsers1);
