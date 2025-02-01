function removeCharacters(str, charsToRemove) {
    return str.split('').filter(char => !charsToRemove.includes(char)).join('');
}


const inputString = prompt("Введіть рядок:");
const charsToRemove = prompt("Введіть символи для видалення (без пробілів):").split('');


const result = removeCharacters(inputString, charsToRemove);
console.log(`Результат: "${result}"`);
