async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("result");

  if (!location) {
    resultDiv.innerHTML = "⚠️ Please enter a location!";
    return;
  }

  const apiKey = "edeb498f6915433ebb6134905251509";

  // ✅ Use correct variable and API key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    resultDiv.innerHTML = "⏳ Fetching weather data...";

    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <p>🌡 Temperature: ${data.current.temp_c}°C</p>
      <p>🌥 Condition: ${data.current.condition.text}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>💨 Wind: ${data.current.wind_kph} kph</p>
      <img src="${data.current.condition.icon}" alt="Weather icon">
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ Could not fetch weather data. Try again!";
  }
}
