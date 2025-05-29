function checkNumber() {
  const input = prompt("Введіть тризначне число:");

  
  if (!input || input.length !== 3 || isNaN(input)) {
    alert("Некоректне число. Введіть саме тризначне число.");
    return;
  }

  
  const digits = input.split("").map(Number);

  const [a, b, c] = digits;

 
  const allSame = a === b && b === c;
  const hasSame = a === b || b === c || a === c;

  if (allSame) {
    alert("Усі цифри однакові.");
  } else if (hasSame) {
    alert("Серед цифр є однакові.");
  } else {
    alert("Усі цифри різні.");
  }
}

checkNumber();
