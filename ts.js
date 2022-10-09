// Task 1
let firstV = 2;
let secondV = 2;
let thirdV = 2;
const res = firstV + secondV + thirdV;
console.log(res);
// Task 2
let secInMin = 60;
let minInH = 60;
let hInDay = 24;
let dayITear = 365;
let myAgeInSeconds = 34 * dayITear * hInDay * minInH * secInMin;
// Task 3
let count = 42;
let userName = '42';
let strCount1;
let strCount2;
let numName1;
let numName2;
strCount1 = "" + count;
strCount2 = count.toString();
numName1 = +userName;
numName2 = parseInt(userName);
// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
let result = "" + a + b + " " + c;
console.log(result);
// Task 5
const firstW = "доступ";
const secondW = "морпех";
const thirdW = "наледь";
const fourthW = "попрек";
const fifthW = "рубило";
let lengthWords = (firstW + secondW + thirdW + fourthW + fifthW).length;
// Task 6
const first = "string";
const second = 12;
const third = true;
console.log(`first have type: ${typeof (first)}`);
console.log(`second have type: ${typeof (second)}`);
console.log(`third have type: ${typeof (third)}`);
// Task 7
const a7 = "true";
const b7 = false;
const c7 = 17;
const d7 = undefined;
const e7 = null;
console.log(typeof (a7) + "\n" + typeof (b7) + "\n" + typeof (c7) + "\n" + typeof (d7) + "\n" + typeof (e7));
// Task 8
let a8 = 15;
let b8 = 20;
a8 > b8 ? console.log(a8) : console.log(b8);
// Task 9
for (let i = 1; i <= 20; i++) {
    if (!(i % 3)) {
        console.log(i);
    }
}
// Task 10
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;
if (key && documents && pen && (apple || orange))
    shouldGoToWork = true;
// Task 11
const readline = require("readline-sync");
const num11 = readline.question("Type a number:");
if (!(num11 % 5) && !(num11 % 3)) {
    console.log("FizBuz");
}
else if (!(num11 % 5)) {
    console.log("Fiz");
}
else if (!(num11 % 3)) {
    console.log("Biz");
}
// Task 12
const age12 = readline.question("Type your age:");
if (age12 >= 18) {
    console.log("Попей пивка");
}
else {
    console.log("Пей колу");
    if (age12 >= 16) {
        console.log("Можешь выкурить сигаретку, только маме не говори");
    }
}
// Task 13
const worldSide12 = readline.question("Type a world side ");
switch (worldSide12) {
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
    default: console.log("Попробуйте еще раз");
}
//ADVANCED level
// Task 1
let a111 = 4;
let b111 = 3;
a111 = "" + a111 + "." + b111;
b111 = parseInt(a111);
a111 = (parseFloat(a111) * 10) % 4;
// Task 2
const result22 = readline.question("Type a result ");
const minus = readline.question("How much to subtract? ");
const plus = readline.question("How much to sum? ");
const multiply = readline.question("How much to multiply? ");
const divide = readline.question("How much to divide? ");
console.log(`((((${result22} - ${minus}) + ${plus})) * ${multiply}) / ${divide} = ${(+(+result22 - +minus + +plus) * +multiply / +divide)}`);
// Task 3
const times = readline.question("Enter the final number of stars ");
let i = 0;
while (i < times) {
    let m = "#";
    for (let k = 0; k < i; k++) {
        m += "#";
    }
    console.log(m);
    i++;
}
