let leftOperand = 0;
let rightOperand = 0;
let operator = "";

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
            alert("Error! Cannot divide by 0!")
        }
        else {
            return divide(leftOperand, rightOperand);
        }
    }
}
