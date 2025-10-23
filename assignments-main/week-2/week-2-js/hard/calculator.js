/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    this.result = 0
  }
  add(number) {
    this.result += number
  }
  sub(number) {
    this.result -= number
  }
  mul(number) {
    this.result *= number
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }
  clear() {
    this.result = 0
  }
  getResult() {
    return this.result
  }
  calculate(str) {
    let expression = ""
    str = str.trim()
    const allowed = "0123456789+-*/()."
    for (let i in str) {
      if (str[i] === " ") continue;
      if (!allowed.includes(str[i])) {
        throw new Error("Invalid character in expression");
      }
      expression += str[i];
    }
    this.result = eval(expression);
  }
}
const calc = new Calculator();
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calc.getResult());

module.exports = Calculator;
