let number = prompt("Введіть тризначне число:");

let digit1 = number[0]; 
let digit2 = number[1]; 
let digit3 = number[2]; 

if (digit1 === digit2 && digit2 === digit3) {
  alert("Всі цифри однакові.");
} else {
  alert("Не всі цифри однакові.");
}

if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
  alert("Є однакові цифри.");
} else {
  alert("Немає однакових цифр.");
}
