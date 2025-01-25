function calculateWindChill(temperature, windSpeed) {
  // Convert temperature to Fahrenheit for the calculation
  const tempF = (temperature * 9) / 5 + 32
  const windSpeedMph = windSpeed * 0.621371 // Convert km/h to mph

  // Calculate wind chill using the formula
  const windChill =
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16)

  // Convert wind chill back to Celsius
  const windChillC = ((windChill - 32) * 5) / 9

  return windChillC.toFixed(1)
}

function setStaticWeather() {
  const weatherData = {
    location: "Buenos Aires",
    temperature: 22,
    conditions: "Partly Cloudy",
    wind: 15,
  }

  document.getElementById("location").textContent = weatherData.location
  document.getElementById("temperature").textContent = weatherData.temperature + "°C"
  document.getElementById("conditions").textContent = weatherData.conditions
  document.getElementById("wind").textContent = weatherData.wind + " km/h"

  const windchill = calculateWindChill(weatherData.temperature, weatherData.wind)
  document.getElementById("windchill").textContent = windchill + "°C"
}

function displayLastModified() {
  const lastModified = new Date(document.lastModified)
  const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const formattedTime = lastModified.toLocaleTimeString("en-US")
  document.getElementById("lastModified").textContent = `${formattedDate} at ${formattedTime}`
}

function setCurrentYear() {
  const currentYear = new Date().getFullYear()
  document.getElementById("currentYear").textContent = currentYear
}

window.addEventListener("DOMContentLoaded", () => {
  setStaticWeather()
  displayLastModified()
  setCurrentYear()
})

