document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    function appendToDisplay(value) {
        display.value += value; // Додає число або оператор у поле вводу
    }

    function clearDisplay() {
        display.value = ""; // Очищає поле вводу
    }

    function calculateResult() {
        try {
            display.value = eval(display.value); // Виконує математичні операції
        } catch {
            display.value = "Помилка"; // Якщо помилка, показує "Помилка"
        }
    }

    // Робимо функції доступними глобально
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
});
