let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 36;
let num7 = 25;
let sum = 0;
let difference = 0;
let product = 0;
let quotient = 0;

function addition(){
    sum = num1 + num2;
    document.getElementById("addition").innerHTML = num1 + " + " + num2 + " = " + sum;
}
function subtraction(){
    difference = num7 - num4;
    document.getElementById("subtraction").innerHTML = num7 + " - " + num4 + " = " + difference;
}
function multiplication(){
    product = num3 * num5;
    document.getElementById("multiplication").innerHTML = num3 + " * " + num5 + " = " + product;
}
function division(){
    quotient = num6 / num3
    document.getElementById("division").innerHTML = num6 + " / " + num3 + " = " + quotient;
}
function assignmentAddition(){
    let a = 4;
    let b = 1;
    a += b;
    document.getElementById("assignedadd").innerHTML = a + " += " + b + " = " + (a += b);
}
function assignmentSubtraction(){
    let a = 4;
    let b = 1;
    a -= b;
    document.getElementById("assignedsub").innerHTML = a + " -= " + b + " = " + (a -= b);
}
function assignmentMultiplication(){
    let a = 5;
    let b = 2;
    a *= b;
    document.getElementById("assignedtim").innerHTML = a + " *= " + b + " = " + (a *= b);
}
function assignmentDivision(){
    let a = 20;
    let b = 2;
    a /= b;
    document.getElementById("assigneddiv").innerHTML = a + " /= " + b + " = " + (a /= b);
}
function equalsOperator(){
    let firstNum = document.getElementById("num1").value;
    let secondNum = document.getElementById("num2").value;
    document.getElementById("equalsAns").innerHTML = firstNum == secondNum;
}
function notEqual(){
    let firstNum = document.getElementById("num3").value;
    let secondNum = document.getElementById("num4").value;
    document.getElementById("notEqualsAns").innerHTML = firstNum != secondNum;
}
function lessThan(){
    let firstNum = document.getElementById("num5").value;
    let secondNum = document.getElementById("num6").value;
    document.getElementById("lessThanAns").innerHTML = firstNum <= secondNum;
}
function greaterThan(){
    let seventhNum;
    let eigthNum;
    if(document.getElementById("r1").checked){
        seventhNum = document.getElementById("r1").value;
    }else if(document.getElementById("r2").checked){
        seventhNum = document.getElementById("r2").value;
    }else if(document.getElementById("r3").checked){
        seventhNum = document.getElementById("r3").value;
    }else if(document.getElementById("r4").checked){
        seventhNum = document.getElementById("r4").value;
    }else if(document.getElementById("r5").checked){
        seventhNum = document.getElementById("r5").value;
    }

    if(document.getElementById("r6").checked){
        eigthNum = document.getElementById("r6").value;
    }else if(document.getElementById("r7").checked){
        eigthNum = document.getElementById("r7").value;
    }else if(document.getElementById("r8").checked){
        eigthNum = document.getElementById("r8").value;
    }else if(document.getElementById("r9").checked){
        eigthNum = document.getElementById("r9").value;
    }else if(document.getElementById("r0").checked){
        eigthNum = document.getElementById("r0").value;
    }
    document.getElementById("greaterThanAns").innerHTML = seventhNum >= eigthNum
}