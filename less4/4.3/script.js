const currentYear = new Date().getFullYear();

// Запитуємо дані
let birthYear = prompt("Введіть рік народження:");
let city = prompt("В якому місті ви живете?");
let sport = prompt("Ваш улюблений вид спорту?");

// Повідомлення для виводу
let message = "";


if (!birthYear) {
  message += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
} else {
  birthYear = Number(birthYear);
  if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
    message += "Ви ввели некоректний рік народження.\n";
  } else {
    let age = currentYear - birthYear;
    message += `Ваш вік: ${age} років.\n`;
  }
}

if (!city) {
  message += "Шкода, що Ви не захотіли ввести своє місто.\n";
} else {
  const capitals = {
    "київ": "України",
    "лондон": "Великої Британії",
    "вашингтон": "США"
  };
  const cityLower = city.trim().toLowerCase();
  if (capitals[cityLower]) {
    message += `Ти живеш у столиці ${capitals[cityLower]}.\n`;
  } else {
    message += `Ти живеш у місті ${city}.\n`;
  }
}


if (!sport) {
  message += "Шкода, що Ви не захотіли ввести улюблений вид спорту.\n";
} else {
  const champions = {
    "футбол": "Ліонель Мессі",
    "бокс": "Олександр Усик",
    "теніс": "Новак Джокович"
  };
  const sportLower = sport.trim().toLowerCase();
  if (champions[sportLower]) {
    message += `Круто! Хочеш стати як ${champions[sportLower]}?`;
  } else {
    message += `Ваш улюблений спорт: ${sport}.`;
  }
}


alert(message);
