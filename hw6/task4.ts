// #### Task 4 🖥

// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

const innerObj = colors['ru pum pu ru rum'];
for (const i in innerObj){
    const key = i as keyof typeof innerObj;
    if(innerObj[key]==='красный'||innerObj[key]==='синий') console.log (innerObj[key])
}
