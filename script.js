document.getElementById("one").addEventListener("click", oneClick);
document.getElementById("remove").addEventListener("click", removeClick);
document.getElementById("reset").addEventListener("click", resetClick);
document.getElementById("two").addEventListener("click", twoClick);
document.getElementById("three").addEventListener("click", threeClick);
document.getElementById("four").addEventListener("click", fourClick);
document.getElementById("five").addEventListener("click", fiveClick);
document.getElementById("six").addEventListener("click", sixClick);
document.getElementById("seven").addEventListener("click", sevenClick);
document.getElementById("eight").addEventListener("click", eightClick);
document.getElementById("nine").addEventListener("click", nineClick);
document.getElementById("zero").addEventListener("click", zeroClick);
document.getElementById("plus").addEventListener("click", plusClick);
document.getElementById("point").addEventListener("click", pointClick);
document.getElementById("equals").addEventListener("click", equalsClick);
document.getElementById("minus").addEventListener("click", minusClick);
document.getElementById("multiplication").addEventListener("click", multiplicationClick);
document.getElementById("division").addEventListener("click", divisionClick);
let firstNumber = "";
let secondNumber = "";
let operator;
let x = 0;
let numbers = [];
function resetClick() {
    document.getElementById("screen").textContent = "";
}
function removeClick() {
    numbers.pop();
    x = numbers.length - 1;
    document.getElementById("screen").textContent = numbers[x];
}
function oneClick() {
    document.getElementById("screen").textContent += "1";
    numbers.push(document.getElementById("screen").textContent);
}
function twoClick() {
    document.getElementById("screen").textContent += "2";
    numbers.push(document.getElementById("screen").textContent);
}
function threeClick() {
    document.getElementById("screen").textContent += "3";
    numbers.push(document.getElementById("screen").textContent);    
}
function fourClick() {
    document.getElementById("screen").textContent += "4";
    numbers.push(document.getElementById("screen").textContent);
}
function fiveClick() {
    document.getElementById("screen").textContent += "5";
    numbers.push(document.getElementById("screen").textContent);
}
function sixClick() {
    document.getElementById("screen").textContent += "6";
    numbers.push(document.getElementById("screen").textContent);
}
function sevenClick() {
    document.getElementById("screen").textContent += "7";
    numbers.push(document.getElementById("screen").textContent);
}
function eightClick() {
    document.getElementById("screen").textContent += "8";
    numbers.push(document.getElementById("screen").textContent);
}
function nineClick() {
    document.getElementById("screen").textContent += "9";
    numbers.push(document.getElementById("screen").textContent);
}
function zeroClick() {
    document.getElementById("screen").textContent += "0";
    numbers.push(document.getElementById("screen").textContent);
}
function pointClick() {
    document.getElementById("screen").textContent += ".";
    numbers.push(document.getElementById("screen").textContent);
}
function plusClick() {
    firstNumber = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNumber = parseFloat(firstNumber);
    operator = 1;
}
function minusClick() {
    firstNumber = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNumber = parseFloat(firstNumber);
    operator = 2;
}
function multiplicationClick() {
    firstNumber = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNumber = parseFloat(firstNumber);
    operator = 3;
}
function divisionClick() {
    firstNumber = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNumber = parseFloat(firstNumber);
    operator = 4;
}
function equalsClick() {
    secondNumber = document.getElementById("screen").textContent;
    secondNumber = parseFloat(secondNumber);
    if (operator === 1) {
        document.getElementById("screen").textContent = firstNumber + secondNumber;
    }
    else if(operator === 2){
        document.getElementById("screen").textContent = firstNumber - secondNumber;
    }
    else if(operator === 3){
        document.getElementById("screen").textContent = firstNumber * secondNumber;
    }
    else if(operator === 4){
        document.getElementById("screen").textContent = firstNumber / secondNumber;
    }
}