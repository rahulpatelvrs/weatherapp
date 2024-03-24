const apiKey = 'b1e2f45cb6fa1f623203d5c96ed0321f'; //api key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const weatherDiv = document.getElementById('weather');
const cityInput = document.getElementById('city-input');

async function searchWeather() {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    
    try {
        const response = await fetch(`${apiUrl}${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        console.log('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function showWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    weatherDiv.innerHTML = `<p>Location: ${name}</p>
                            <p>Temperature: ${temperature}°C</p>
                            <p>Description: ${description}</p>`;
}
