let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');

menu.onClick = () =>{
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}
window.onscroll = () =>{
	menu.classList.remove('fa-times');
	header.classList.remove('active');
}

});
	
	document.getElementById("mainPageButton").addEventListener("click", function() {
    // Redirect to the main HTML page
    window.location.href = "main.html";
});



/*weather*/
        // Function to get weather data
        function getWeather(city) {
            // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
            var apiKey = '873edd09052f07136e63b85accdb7453';
            var apiUrl = 'https://home.openweathermap.org/ '+ city + '&appid=' + apiKey;

            // Fetch weather data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Display weather information
                    var weatherDiv = document.getElementById("weather");
                    weatherDiv.innerHTML = "Temperature: " + (data.main.temp - 273.15).toFixed(2) + "°C<br>";
                    weatherDiv.innerHTML += "Weather: " + data.weather[0].description;
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }

        // Get user's location using Geolocation API
        navigator.geolocation.getCurrentPosition(showPosition, showError);

        function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Use OpenCage Geocoding API to get location name
            var apiKey = 'ac74402f17a14f898d167aba312df729';
            var geoUrl = 'https://api.opencagedata.com/geocode/v1/json?q=' + latitude + '+' + longitude + '&key=' + apiKey;

            fetch(geoUrl)
                .then(response => response.json())
                .then(data => {
                    // Display user's location
                    var locationDiv = document.getElementById("location");
                    var city = data.results[0].components.city;
                    var country = data.results[0].components.country;
                    locationDiv.innerHTML = "Location: " + city + ", " + country;

                    // Get weather data for the city
                    getWeather(city);
                })
                .catch(error => console.error('Error fetching location data:', error));
        }

        function showError(error) {
            var locationDiv = document.getElementById("location");
            locationDiv.innerHTML = "Error getting location: " + error.message;
        }