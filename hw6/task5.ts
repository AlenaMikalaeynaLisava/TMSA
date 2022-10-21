// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную


    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey1: 664,
        alexandra: 199
    }

    let averageSalary:number =0;
    let wholeSalary : number =0;
    let numberOfPeople : number =0;

    for(const i in salaries){
        const key = i as keyof typeof salaries;
        wholeSalary += salaries[key];
        numberOfPeople++;
    }

    averageSalary = wholeSalary/numberOfPeople;
    console.log(averageSalary);