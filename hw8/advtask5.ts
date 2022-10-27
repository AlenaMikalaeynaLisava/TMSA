// #### Task 5. 
// Есть массив кандидатов, например: 
// { name : 'John', reviews: Map[['Mark', 5.8], ['Joshua', 9.3]]}
// { name : 'Bob', reviews: Map[['Mark', 5.9], ['Joshua', 9.0]]}
// { name : 'Thomas', reviews: Map[['Mark', 4], ['Joshua', 10]]}
// И коллекция ревьюверов: Map[['Mark', 7], ['Joshua', 8]]
// Нужно нанять только 1 кандидата, каждый ревьювер выставил кандидату оценку
// Также каждый ревьювер имеет свою компетенцию в баллах, 
// которая показывает, как сильно его оценка влияет на результат
// Вычислить, кто из кандидатов все-таки будет принят


const camdidate = [
    { 
    name : 'John', 
    reviews: new Map([['Mark', 5.8], ['Joshua', 9.3]])
    },
    { 
    name : 'Bob', 
    reviews: new Map([['Mark', 5.9], ['Joshua', 9.0]])
    },
    { 
    name : 'Thomas', 
    reviews: new Map([['Mark', 4], ['Joshua', 10]])
    },
    ];
    
const reviewers = new Map([['Mark', 7], ['Joshua', 8]]);
let bestCandidate =camdidate[0].name;
let max =0;

const calculateCand = (item:{name:string, reviews:Map<string, number>})=>{
    let result:number =0;
    for (let key of reviewers.keys()) {
        const rewRes = reviewers.get(key); 
        const candRes = item.reviews.get(key);
        if(rewRes&&candRes)
        result = result + rewRes*candRes;
        }

    if(result>max){
        max = result;
        bestCandidate = item.name;
        }
    }
    
camdidate.forEach((item)=>{
    calculateCand(item);
})

console.log(bestCandidate);