const randomNumber = Math.floor(Math.random() * 9) + 1;
const imagePath = `images/${randomNumber}.jpg`;
document.getElementById("randomImage").src = imagePath;
