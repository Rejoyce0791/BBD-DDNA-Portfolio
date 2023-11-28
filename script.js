function downloadCV() {
    // Add code to handle CV download
    alert("Downloading CV...");
}
document.addEventListener("DOMContentLoaded", () => {
    // Replace "YOUR_OPENWEATHERMAP_API_KEY" with your actual OpenWeatherMap API key
    const apiKey = "873edd09052f07136e63b85accdb7453";
    
    // Specify the city name for which you want to get the weather
    const cityName = "jhb";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetch weather data from OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});

function displayWeather(data) {
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");

    const location = data.name + ", " + data.sys.country;
    const temperature = data.main.temp + " °C";
    const description = data.weather[0].description;

    locationElement.textContent = "Location: " + location;
    temperatureElement.textContent = "Temperature: " + temperature;
    descriptionElement.textContent = "Description: " + description;
}