// Wind chill calculation
const calculateWindChill = (tempF, speedMph) => 
  35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);

// Weather data simulation
function getWeatherData() {
  const tempC = 22;
  const tempF = (tempC * 9/5) + 32;
  const windKph = 10;
  const windMph = windKph * 0.621371;
  
  let windChillC = 'N/A';
  
  // Calculate wind chill only if conditions are met
  if (tempF <= 50 && windMph > 3) {
      const windChillF = calculateWindChill(tempF, windMph);
      windChillC = ((windChillF - 32) * 5/9).toFixed(1) + '°C';
  }

  return {
      temperature: `${tempC}°C`,
      conditions: 'Sunny',
      wind: `${windKph} km/h`,
      windchill: windChillC
  };
}

// Update weather information
function updateWeather() {
  const weatherData = getWeatherData();
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('conditions').textContent = weatherData.conditions;
  document.getElementById('wind').textContent = weatherData.wind;
  document.getElementById('windchill').textContent = weatherData.windchill;
}

// Update last modified date
function updateLastModified() {
  const now = new Date();
  document.getElementById('lastModified').textContent = now.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateWeather();
  updateLastModified();
});