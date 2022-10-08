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

a8>b8?console.log(a8):console.log(b8);


// Task 9

for (let i=1; i<=20; i++){
    if(! (i % 3)){
        console.log(i)
    }
}


// Task 10

let key : boolean = true
let documents : boolean = true
let pen : boolean = true
let apple : boolean = false
let orange : boolean = true
let shouldGoToWork: boolean;

if( key && documents && pen && (apple || orange))
shouldGoToWork = true;


// Task 11
const readline = require("readline-sync");
const num11 = readline.question("Type a number:");
if(!(num11 % 5) && !(num11 % 3)){
    console.log("FizBuz");
} else if(!(num11 % 5)){
    console.log("Fiz");
} else if(!(num11 % 3)){
    console.log("Biz");
}


// Task 12
const readline12 = require("readline-sync");
const age12 = readline12.question("Type your age:");

if(age12 >= 18){
 console.log("Попей пивка");
} else {
 console.log("Пей колу");
 if( age12 >= 16){
    console.log("Можешь выкурить сигаретку, только маме не говори");
 }
}


// Task 13

const readline13 = require("readline-sync");
const worldSide12 = readline12.question("Type a world side ");

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

a111 = "" + a111 + "." + b111;
b111 = parseInt(a111);
a111 = (parseFloat(a111) * 10) %4;


// Task 2
const readline22 = require("readline-sync");
const result22 = readline22.question("Type a result ");
const minus = readline22.question("How much to subtract? ");
const plus = readline22.question("How much to sum? ");
const multiply = readline22.question("How much to multiply? ");
const divide = readline22.question("How much to divide? ");
console.log(`((((${result22} - ${minus}) + ${plus})) * ${multiply}) / ${divide} = ${(+(+result22 - +minus + +plus) * +multiply / +divide)}`)


// Task 3
const readline333 = require("readline-sync");
const times = readline333.question("Type a result ");

let i = 0;
while (i<times) {
    let m ="#"
    for(let k=0; k<i; k++){
   m += "#"
    }
    console.log(m);
    i++;
}