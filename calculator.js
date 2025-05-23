// Basic calculator functions and CLI using readline
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    }
    return x / y;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Select operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

readline.question("Enter choice (1/2/3/4): ", function(choice) {
    readline.question("Enter first number: ", function(num1) {
        readline.question("Enter second number: ", function(num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;
            if (choice === '1') {
                result = `${num1} + ${num2} = ${add(num1, num2)}`;
            } else if (choice === '2') {
                result = `${num1} - ${num2} = ${subtract(num1, num2)}`;
            } else if (choice === '3') {
                result = `${num1} * ${num2} = ${multiply(num1, num2)}`;
            } else if (choice === '4') {
                result = `${num1} / ${num2} = ${divide(num1, num2)}`;
            } else {
                result = "Invalid input";
            }
            console.log(result);
            readline.close();
        });
    });
});
