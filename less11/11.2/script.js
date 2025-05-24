document.getElementById("colorButton").addEventListener("click", function() {
    let textElement = document.getElementById("text");

    // Перевіряємо поточний колір тексту і змінюємо на інший
    if (textElement.style.color === "black") {
        textElement.style.color = "red"; // Новий колір
    } else {
        textElement.style.color = "black"; // Повернення до початкового кольору
    }
});
