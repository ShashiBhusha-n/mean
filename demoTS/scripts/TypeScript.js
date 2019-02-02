"use strict";
function addThis() {
    var a = Number(prompt("Number 1"));
    var b = Number(prompt("Number 2"));
    alert("Result is: " + (a + b));
}
function printTable() {
    var a = Number(prompt("Number"));
    var output = '';
    var num;
    for (num = 1; num <= 10; num++) {
        output = output + num * a + '\n';
    }
    alert(output);
}
function largestNumber() {
    var a = Number(prompt("Number 1"));
    var b = Number(prompt("Number 2"));
    var c = Number(prompt("Number 3"));
    if (a > b) {
        if (a > c)
            alert(a + " is largest");
        else
            alert(c + " is largest");
    }
    else {
        if (b > c)
            alert(b + " is largest");
        else
            alert(c + " is largest");
    }
}
function checkPrime() {
    var a = Number(prompt("Number to Check prime"));
    var flag = false;
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            flag = true;
        }
    }
    if (flag != true)
        alert(a + " is prime");
    else
        alert(a + " is not a prime");
}
function getFactorial() {
    var a = Number(prompt("Number to Get Factorial"));
    var result = 1;
    for (var i = a; i > 1; i) {
        result = result * i;
    }
    alert("Factorial of " + a + " is: " + result);
}
//# sourceMappingURL=TypeScript.js.map