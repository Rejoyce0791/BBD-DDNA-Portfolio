function downloadCV() {
    // Add code to handle CV download
    alert("Downloading CV...");
}
document.addEventListener("DOMContentLoaded", () => {
    // Check if Geolocation is supported by the browser
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(getWeatherByCoordinates, handleLocationError);
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

function getWeatherByCoordinates(position) {
    // Replace "YOUR_OPENWEATHERMAP_API_KEY" with your actual OpenWeatherMap API key
    const apiKey = "873edd09052f07136e63b85accdb7453";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Fetch weather data from OpenWeatherMap API based on coordinates
    fetchWeatherData(latitude, longitude, apiKey);
}

function getWeatherByCity() {
    const cityInput = document.getElementById("cityInput").value;
    
    if (cityInput.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    // Replace "YOUR_OPENWEATHERMAP_API_KEY" with your actual OpenWeatherMap API key
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

    // Fetch coordinates for the given city name
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput)}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;

            // Fetch weather data from OpenWeatherMap API based on coordinates
            fetchWeatherData(latitude, longitude, apiKey);
        })
        .catch(error => {
            console.error("Error fetching coordinates:", error);
        });
}

function fetchWeatherData(latitude, longitude, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    // Fetch weather data from OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

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

function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };