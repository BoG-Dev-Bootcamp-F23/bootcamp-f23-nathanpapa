const weatherInfo = document.getElementById("weather-info");
const API_KEY = "5449c2272a9894dbaed6c44cb0650392";
const city = "Atlanta";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    weatherInfo.innerHTML = `
        <p>City: ${city}</p>
        <p>Temperature: ${data.main.temp}&#176 Fahrenheit</p>
        <p>Weather description: ${data.weather[0].description}</p>
    `;
}

document.addEventListener("click", () => {
    fetchData();
});

fetchData();