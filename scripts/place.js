// Simulated weather data
function getWeatherData() {
  return {
      temperature: '22°C',
      conditions: 'Sunny',
      wind: 10,
      humidity: '65%',
  };
}

function calculateWindChill(temp, windSpeed) {
  return temp <= 50 && windSpeed > 3
      ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°F"
      : "N/A";
}

function updateWeather() {
  const data = getWeatherData();
  document.getElementById('temperature').textContent = data.temperature;
  document.getElementById('conditions').textContent = data.conditions;
  document.getElementById('wind').textContent = `${data.wind} km/h`;
  document.getElementById('humidity').textContent = data.humidity;
  document.getElementById('windChill').textContent = calculateWindChill(45, data.wind);
}

updateWeather();

function updateLastModified() {
  document.getElementById('lastModified').textContent = document.lastModified;
}

updateLastModified();
