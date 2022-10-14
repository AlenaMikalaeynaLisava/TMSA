// Task 1

let firstV : number = 2;
let secondV : number = 2;
let thirdV : number = 2;

const res : number = firstV + secondV + thirdV;
console.log(res);


// Task 2

let secInMin : number = 60;
let minInH : number = 60;
let hInDay : number = 24;
let dayITear : number = 365;

let myAgeInSeconds = 34 * dayITear * hInDay * minInH * secInMin;


// Task 3

let count : number = 42;
let userName : string = '42';
let strCount1 : string;
let strCount2 : string;
let numName1 : number;
let numName2 : number;

strCount1 = "" + count;
strCount2 = count.toString();
numName1 = +userName;
numName2 = parseInt(userName);

 
// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

let result = "" +a + b + " " + c;
console.log(result);


// Task 5

const firstW : string = "доступ";
const secondW : string = "морпех";
const thirdW : string = "наледь";
const fourthW : string = "попрек";
const fifthW : string = "рубило";

let lengthWords : number = (firstW + secondW + thirdW + fourthW + fifthW).length;


// Task 6

const first : string = "string";
const second : number = 12;
const third : boolean = true;

console.log(`first have type: ${typeof(first)}`);
console.log(`second have type: ${typeof(second)}`);
console.log(`third have type: ${typeof(third)}`);


// Task 7

const a7 : string = "true";
const b7 : boolean = false;
const c7 : number = 17;
const d7 : undefined = undefined;
const e7 : null = null;
console.log (typeof(a7) + "\n" + typeof(b7) + "\n" + typeof(c7) + "\n" + typeof(d7) + "\n" + typeof(e7))


// Task 8

let a8 : number = 15;
let b8 : number = 20;

console.log(a8>b8?a8:b8);


// Task 9

for (let i=1; i<=20; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}


// Task 10
const readline = require("readline-sync");
let keyInBag : string = readline.question("Type true if we have a key: ");
let key : boolean = (keyInBag === 'true')?true:false
let documentsInBag : string = readline.question("Type true if we have documents: ");
let documents : boolean = (documentsInBag === 'true')?true:false
let penInBag : string = readline.question("Type true if we have a pen: ");
let pen : boolean = (penInBag === 'true')?true:false
let appleInBag : string = readline.question("Type true if we have an apple: ");
let apple : boolean = (appleInBag === 'true')?true:false
let orangeInBag : string = readline.question("Type true if we have an orange: ");
let orange : boolean = (orangeInBag === 'true')?true:false
let shouldGoToWork: boolean = false;


if( key && documents && pen && (apple || orange))
shouldGoToWork = true;



// Task 11


const num11 = readline.question("Type a number:");
let toType = '';
if(num11 % 5 === 0){
toType += "Fiz";}
if(num11 % 3 === 0){
toType += "Biz";
}
console.log(toType)


// Task 12

const age12 = readline.question("Type your age:");

if(age12 >= 18){
 console.log("Попей пивка");
} else {
 console.log("Пей колу");
 if( age12 >= 16){
    console.log("Можешь выкурить сигаретку, только маме не говори");
 }
}


// Task 13

const worldSide12 = readline.question("Type a world side ");

switch(worldSide12){
    case "south":
    console.log("на юг пойдешь счастье найдешь");
    break;
    case "north":
    console.log("на север пойдешь много денег найдешь");
    break;
    case "west":
    console.log("на запад пойдешь верного друга найдешь");
    break;
    case "east":
    console.log("на восток пойдешь разработчиком станешь");
    break;
    default: console.log("Попробуйте еще раз")
}


//ADVANCED level

// Task 1

let a111 : number | string = 4;
let b111 : number = 3;

b111 = a111 - b111
a111 = a111 - b111


// Task 2

const result22 = readline.question("Type a result ");
const minus = readline.question("How much to subtract? ");
const plus = readline.question("How much to sum? ");
const multiply = readline.question("How much to multiply? ");
const divide = readline.question("How much to divide? ");
const difference = `${result22} - ${minus}`;
const sum = `${difference} + ${plus}`;
const mult = `${sum} * ${multiply}`;
const result222 = `${(+(+result22 - +minus + +plus) * +multiply / +divide)}`
console.log(`${mult} / ${divide} = ${result}`);


// Task 3

const times = readline.question("Enter the final number of stars ");

let i = 0;
const stairSymb = '#';
let toType11 = '';
for(let k=0; k<times; k++){
console.log(toType11 += stairSymb);
}