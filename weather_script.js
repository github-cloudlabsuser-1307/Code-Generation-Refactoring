const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => console.error('Error fetching weather data:', error));