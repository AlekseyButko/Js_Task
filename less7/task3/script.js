function askNumber() {
  let lastInput;
  
  for (let i = 0; i < 10; i++) {
    const input = prompt("Введіть число більше 100:");
    lastInput = input;

    const number = Number(input);

    
    if (isNaN(number) || number > 100) {
      break;
    }
  }

  console.log("Останнє введене значення:", lastInput);
}

askNumber();
