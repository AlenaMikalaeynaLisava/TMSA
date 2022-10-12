// Task 1
var firstV = 2;
var secondV = 2;
var thirdV = 2;
var res = firstV + secondV + thirdV;
console.log(res);
// Task 2
var secInMin = 60;
var minInH = 60;
var hInDay = 24;
var dayITear = 365;
var myAgeInSeconds = 34 * dayITear * hInDay * minInH * secInMin;
// Task 3
var count = 42;
var userName = '42';
var strCount1;
var strCount2;
var numName1;
var numName2;
strCount1 = "" + count;
strCount2 = count.toString();
numName1 = +userName;
numName2 = parseInt(userName);
// Task 4
var a = 1;
var b = 2;
var c = "белых медведей";
var result = "" + a + b + " " + c;
console.log(result);
// Task 5
var firstW = "доступ";
var secondW = "морпех";
var thirdW = "наледь";
var fourthW = "попрек";
var fifthW = "рубило";
var lengthWords = (firstW + secondW + thirdW + fourthW + fifthW).length;
// Task 6
var first = "string";
var second = 12;
var third = true;
console.log("first have type: ".concat(typeof (first)));
console.log("second have type: ".concat(typeof (second)));
console.log("third have type: ".concat(typeof (third)));
// Task 7
var a7 = "true";
var b7 = false;
var c7 = 17;
var d7 = undefined;
var e7 = null;
console.log(typeof (a7) + "\n" + typeof (b7) + "\n" + typeof (c7) + "\n" + typeof (d7) + "\n" + typeof (e7));
// Task 8
var a8 = 15;
var b8 = 20;
a8 > b8 ? console.log(a8) : console.log(b8);
// Task 9
for (var i_1 = 1; i_1 <= 20; i_1++) {
    if (!(i_1 % 3)) {
        console.log(i_1);
    }
}
// Task 10
var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;
var shouldGoToWork;
if (key && documents && pen && (apple || orange))
    shouldGoToWork = true;
// Task 11
var readline = require("readline-sync");
var num11 = readline.question("Type a number:");
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
var age12 = readline.question("Type your age:");
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
var worldSide12 = readline.question("Type a world side ");
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
var a111 = 4;
var b111 = 3;
a111 = "" + a111 + "." + b111;
b111 = parseInt(a111);
a111 = (parseFloat(a111) * 10) % 4;
// Task 2
var result22 = readline.question("Type a result ");
var minus = readline.question("How much to subtract? ");
var plus = readline.question("How much to sum? ");
var multiply = readline.question("How much to multiply? ");
var divide = readline.question("How much to divide? ");
console.log("((((".concat(result22, " - ").concat(minus, ") + ").concat(plus, ")) * ").concat(multiply, ") / ").concat(divide, " = ").concat((+(+result22 - +minus + +plus) * +multiply / +divide)));
// Task 3
var times = readline.question("Enter the final number of stars ");
var i = 0;
while (i < times) {
    var m = "#";
    for (var k = 0; k < i; k++) {
        m += "#";
    }
    console.log(m);
    i++;
}
