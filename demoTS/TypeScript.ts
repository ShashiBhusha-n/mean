
function addThis() {
    var a: number = Number(prompt("Number 1"));
    var b: number = Number(prompt("Number 2"));
    alert("Result is: " + (a + b));
}

function printTable() {
    var a: number = Number(prompt("Number"));
    var output: string = '';
    var num: number;
    for (num = 1; num <= 10; num++) {
        output = output + num * a + '\n';
    }
    alert(output);
}

function largestNumber() {
    var a: number = Number(prompt("Number 1"));
    var b: number = Number(prompt("Number 2"));
    var c: number = Number(prompt("Number 3"));
    if (a > b) {
        if (a > c)
            alert(a + " is largest")
        else
            alert(c + " is largest")
    } else {
        if (b > c)
            alert(b + " is largest")
        else
            alert(c + " is largest")
    }
}

function checkPrime() {
    var a: number = Number(prompt("Number to Check prime"));
    var flag: boolean = false;
    for (var i: number = 2; i < a; i++) {
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
    var a: number = Number(prompt("Number to Get Factorial"));
    var result: number = 1;
    for (var i: number = a; i > 1; i) {
        result = result * i;
    }
    alert("Factorial of " + a + " is: " + result);
}