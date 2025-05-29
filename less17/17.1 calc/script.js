class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) return "Помилка: ділення на нуль";
    return a / b;
  }
}

const calc = new Calculator();

function calculate(operation) {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Будь ласка, введіть обидва числа.";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = calc.add(a, b);
      break;
    case "subtract":
      result = calc.subtract(a, b);
      break;
    case "multiply":
      result = calc.multiply(a, b);
      break;
    case "divide":
      result = calc.divide(a, b);
      break;
  }

  resultDiv.textContent = `Результат: ${result}`;
}
