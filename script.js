let apiKey = "acf8aa8162d6224707eab34581845c12";
let userCity = document.getElementById('city');
let searchBtn = document.getElementById('search');
let title = document.getElementById('name');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let hum = document.getElementById('hum');
let uvIndex = document.getElementById('uv-index');

searchBtn.addEventListener('click', getApi);

function getApi() {
    let selectedCity = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity.value + "&appid=acf8aa8162d6224707eab34581845c12";

    fetch(selectedCity)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let lat = data.coord.lat;
            console.log(lat);
            let lon = data.coord.lon;
            console.log(lon);
            title.textContent = data.name;

            let cityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=alerts&appid=acf8aa8162d6224707eab34581845c12";

            fetch(cityWeather)
                .then(function (newResponse) {
                    console.log(newResponse);
                    return newResponse.json();
                })
                .then(function (newData) {
                    console.log(newData);
                    temp.textContent = "Temp: " + newData.current.temp + " ℉";
                    wind.textContent = "Wind: " + newData.current.humidity + " MPH";
                    hum.textContent = "Humidity: " + newData.current.wind_speed + "%";
                    uvIndex.textContent = "UV Index: " + newData.current.uvi;
                });
        });
};