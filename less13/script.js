document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Елементи
  const name = document.getElementById("name");
  const message = document.getElementById("message");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  // Повідомлення про помилки
  let isValid = true;

  // Очищення попередніх помилок
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Валідація: Ім’я (обов’язкове)
  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Введіть ім’я.";
    isValid = false;
  }

  
  if (message.value.trim().length < 5) {
    document.getElementById("messageError").textContent = "Повідомлення має містити мінімум 5 символів.";
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone.value.trim())) {
    document.getElementById("phoneError").textContent = "Невірний номер телефону. Формат: +380XXXXXXXXX";
    isValid = false;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Введіть коректний email.";
    isValid = false;
  }

  
  if (isValid) {
    console.log("Дані користувача:");
    console.log("Ім’я:", name.value.trim());
    console.log("Повідомлення:", message.value.trim());
    console.log("Телефон:", phone.value.trim());
    console.log("Email:", email.value.trim());
    alert("Повідомлення надіслано успішно ✅");
    e.target.reset();
  }
});
