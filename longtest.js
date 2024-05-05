function additionOp(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    let sum = first + second;
    document.getElementById("answer").innerHTML = sum;
}
function subtractionOp(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    let difference = first - second;
    document.getElementById("answer").innerHTML = difference;
}
function multiplicationOp(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    let product = first * second;
    document.getElementById("answer").innerHTML = product;
}
function divisionOp(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    let quotient = first / second;
    document.getElementById("answer").innerHTML = quotient;
}
function assignedAdd(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    first += second
    document.getElementById("answer").innerHTML = first + " += " + second + " = " + (first += second);
}
function assignedSub(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    first -= second
    document.getElementById("answer").innerHTML = first + " -= " + second + " = " + (first -= second);
}
function assignedMul(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    first *= second
    document.getElementById("answer").innerHTML = first + " *= " + second + " = " + (first *= second);
}
function assignedDiv(){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    first /= second
    document.getElementById("answer").innerHTML = first + " /= " + second + " = " + (first /= second);
}
function equalsOp(){
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    document.getElementById("answer").innerHTML = first == second;
}
function notequalsOp(){
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    document.getElementById("answer").innerHTML = first != second;
}
function lessThan(){
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    document.getElementById("answer").innerHTML = first <= second;
}
function greaterThan(){
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    document.getElementById("answer").innerHTML = first >= second;
}