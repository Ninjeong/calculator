let leftOperand = "";
let rightOperand = "";
let operator = "";
let operatorClicked = false;
let resultDisplayed = false;
let allowDecimal = true;

const clearBtn = document.querySelector("#clearBtn");

const sevenBtn = document.querySelector("#Btn7");
const eightBtn = document.querySelector("#Btn8");
const nineBtn = document.querySelector("#Btn9");
const divideBtn = document.querySelector("#divideBtn");

const fourBtn = document.querySelector("#Btn4");
const fiveBtn = document.querySelector("#Btn5");
const sixBtn = document.querySelector("#Btn6");
const multiplyBtn = document.querySelector("#multiplyBtn");

const oneBtn = document.querySelector("#Btn1");
const twoBtn = document.querySelector("#Btn2");
const threeBtn = document.querySelector("#Btn3");
const subBtn = document.querySelector("#subBtn");

const zeroBtn = document.querySelector("#Btn0");
const decimalBtn = document.querySelector("#decimalBtn");
const equalBtn = document.querySelector("#equalBtn");
const addBtn = document.querySelector("#addBtn");

const mainDisplay = document.querySelector(".mainDisplay");

function add(leftOperand, rightOperand) {
    return leftOperand + rightOperand;
}

function subtract(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
}

function multiply(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
}

function divide(leftOperand, rightOperand) {
    return leftOperand / rightOperand;
}

function operate(leftOperand, operator, rightOperand) {
    if (operator === "+") {
        return add(leftOperand, rightOperand);
    }
    else if (operator === "-") {
        return subtract(leftOperand, rightOperand);
    }
    else if (operator === "x") {
        return multiply(leftOperand, rightOperand);
    }
    else if (operator === "÷") {
        if (rightOperand === 0) {
            alert("Error! Cannot divide by 0!");
            clear();
        }
        else {
            return divide(leftOperand, rightOperand);
        }
    }
}

function appendDigit(digit) {
    if (resultDisplayed) {
        clear();
        resultDisplayed = false;
    }
    if (operatorClicked === false) {
        leftOperand += digit;
    }
    else {
        rightOperand += digit;
    }
    mainDisplay.textContent = operatorClicked ? rightOperand : leftOperand;

}

function clear() {
    allowDecimal = true;
    decimalBtn.disabled = false;
    resultDisplayed = false;
    leftOperand = "";
    rightOperand = "";
    operatorClicked = false;
    operator = "";
    mainDisplay.textContent = "";
}

function setOperator(operatorSymbol) {
    resultDisplayed = false;
    allowDecimal = true;          
    decimalBtn.disabled = false;  
    if (leftOperand !== "" && rightOperand !== "") {
        // both numbers exist, calculate first
        leftOperand = String(operate(Number(leftOperand), operator, Number(rightOperand)));
        rightOperand = "";
        mainDisplay.textContent = leftOperand;
    }
    operator = operatorSymbol;
    operatorClicked = true;
}

clearBtn.addEventListener("click", () => clear());

oneBtn.addEventListener("click", () => appendDigit("1"));
twoBtn.addEventListener("click", () => appendDigit("2"));
threeBtn.addEventListener("click", () => appendDigit("3"));
fourBtn.addEventListener("click", () => appendDigit("4"));
fiveBtn.addEventListener("click", () => appendDigit("5"));
sixBtn.addEventListener("click", () => appendDigit("6"));
sevenBtn.addEventListener("click", () => appendDigit("7"));
eightBtn.addEventListener("click", () => appendDigit("8"));
nineBtn.addEventListener("click", () => appendDigit("9"));
zeroBtn.addEventListener("click", () => appendDigit("0"));
decimalBtn.addEventListener("click", () => {
    appendDigit(".");
    allowDecimal = false;
    decimalBtn.disabled = true;
});

addBtn.addEventListener("click", () => setOperator("+"));
subBtn.addEventListener("click", () => setOperator("-"));
multiplyBtn.addEventListener("click", () => setOperator("x"));
divideBtn.addEventListener("click", () => setOperator("÷"));

equalBtn.addEventListener("click", () => {
    if (leftOperand !== "" && rightOperand !== "" && operator !== "") {
        const result = parseFloat(operate(Number(leftOperand), operator, Number(rightOperand)).toFixed(10));
        resultDisplayed = true;
        mainDisplay.textContent = result;
        leftOperand = String(parseFloat(result.toFixed(10)));
        rightOperand = "";
        operator = "";
        operatorClicked = false;
    }
    else {
        alert("Invalid input, please input operands");
        clear();
    }
});