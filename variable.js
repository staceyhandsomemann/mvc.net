var alpha = 9;
var bravo = 13;
var charlie = bravo - alpha;
function autoDeclare(){
    x = 5;
    y = 3;
    z = x + y;
    window.alert(z + " you idiot");
}
function varDeclaration(){
    window.alert(charlie + " you idiot"); 
}
function letDeclaration(){
    let a = 4;
    let b = 7;
    let c = b * a;
    window.alert(c + " you idiot");
}
function constDeclaration(){
    const a = 4;
    const b = 8;
    const c = b * a;
    window.alert(c + " you idiot");
}
const input = document.querySelector("input");
const output = document.querySelector(".output");

function text() {
  output.textContent = input.value;
};