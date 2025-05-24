const apiKey = "d1e0c59d9c78c232685505e2b400e2ab"; 
const city = "Kyiv";

function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("location").textContent = data.name;
      document.getElementById("temp").textContent = Math.round(data.main.temp);
      document.getElementById("feels_like").textContent = Math.round(data.main.feels_like);
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("pressure").textContent = data.main.pressure;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      const now = new Date();
      document.getElementById("date-time").textContent = now.toLocaleString("uk-UA");
    })
    .catch(err => {
      alert("Не вдалося завантажити погоду");
      console.error(err);
    });
}

fetchWeather(); 