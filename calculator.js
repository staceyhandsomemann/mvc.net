var num1, num2, answer;//numbers
var operator;//String
var toClear;//boolean

function insert(num){
    document.input.numview.value=document.input.numview.value + num;
}
function backspace(){
    var numero = document.input.numview.value;
    document.input.numview.value = number.substring(0,number.length - 1);
    var numero2 = document.input.numview.value;
    var numPoint = 0;
    var char = "";
    for(let i = 0; i <number2.length;i++){
        char = numero.substring(i,i + 1);
        if(char=='.'){
            numPoint = 1
        }
    }
    if(numPoint>0){
        decimalUsed=true;
    }
    else{
        decimalUsed=false;
    }
}
function keypress(){
    num1 = Number(document.input.numview.value);
    input.numview.value='';
}
function equals(){
    num2 = Number(document.input.numview.value);
    answer = num1 + num2;
    document.input.numview.value = answer;
}