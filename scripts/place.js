function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  }
  return null;
}

function getWeatherData() {
  const locations = ["Buenos Aires", "Córdoba", "Mendoza", "Bariloche", "Ushuaia", "Salta", "Rosario"];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomTemp = Math.floor(Math.random() * 30) - 5; 
  const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"][Math.floor(Math.random() * 4)];
  const wind = Math.floor(Math.random() * 20); 

  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch weather data");
  }

  return {
    location: randomLocation,
    temperature: randomTemp,
    conditions: conditions,
    wind: wind,
  };
}

function updateWeather() {
  try {
    const weatherData = getWeatherData();
    document.getElementById("location").textContent = weatherData.location;
    document.getElementById("temperature").textContent = weatherData.temperature + "°C";
    document.getElementById("conditions").textContent = weatherData.conditions;
    document.getElementById("wind").textContent = weatherData.wind + " km/h";

    const windchill = calculateWindChill(weatherData.temperature, weatherData.wind);
    document.getElementById("windchill").textContent = windchill ? windchill.toFixed(1) + "°C" : "N/A";
  } catch (error) {
    console.error("Error updating weather:", error);
    document.getElementById("location").textContent = "Error loading data";
    document.getElementById("temperature").textContent = "Error loading data";
    document.getElementById("conditions").textContent = "Error loading data";
    document.getElementById("wind").textContent = "Error loading data";
    document.getElementById("windchill").textContent = "Error loading data";
  }
}

function displayLastModified() {
  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = lastModified.toLocaleTimeString('en-US');
  document.getElementById("lastModified").textContent = `${formattedDate} at ${formattedTime}`;
}

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}

window.addEventListener("DOMContentLoaded", () => {
  updateWeather();
  displayLastModified();
  setCurrentYear();
});

setInterval(updateWeather, 300000); // Update weather every 5 minutes