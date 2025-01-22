function getWeatherData() {
  const locations = ["Buenos Aires", "Córdoba", "Mendoza", "Bariloche", "Ushuaia", "Salta", "Rosario"];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomTemp = Math.floor(Math.random() * 30) - 5; 
  const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"][Math.floor(Math.random() * 4)];
  const wind = Math.floor(Math.random() * 20); 
  const windchill = randomTemp - wind / 5;

  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch weather data");
  }

  return {
    location: randomLocation,
    temperature: randomTemp + "°C",
    conditions: conditions,
    wind: wind + " km/h",
    windchill: windchill.toFixed(1) + "°C",
  };
}

function updateWeather() {
  try {
    const weatherData = getWeatherData();
    document.getElementById("location").textContent = weatherData.location;
    document.getElementById("temperature").textContent = weatherData.temperature;
    document.getElementById("conditions").textContent = weatherData.conditions;
    document.getElementById("wind").textContent = weatherData.wind;
    document.getElementById("windchill").textContent = weatherData.windchill;
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

setInterval(updateWeather, 5000);

window.addEventListener("DOMContentLoaded", () => {
  updateWeather(); 
  displayLastModified();
});
