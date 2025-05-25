document.getElementById("colorButton").addEventListener("click", function() {
    let textElement = document.getElementById("text");
    if (textElement.style.color === "black") {
        textElement.style.color = "red"; 
    } else {
        textElement.style.color = "black"; 
    }
});
