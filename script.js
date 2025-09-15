async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("result");

  if (!location) {
    resultDiv.innerHTML = "⚠️ Please enter a location!";
    return;
  }

  const apiKey = "edeb498f6915433ebb6134905251509";
 const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;


  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");
    
    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <p>🌡 Temperature: ${data.current.temp_c}°C</p>
      <p>🌥 Condition: ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="Weather icon">
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ Could not fetch weather data. Try again!";
  }
}
