let apiKey = "acf8aa8162d6224707eab34581845c12";
let userCity = document.getElementById('city');
let searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', getApi);

function getApi() {
    let selectedCity = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity.value + "&appid=acf8aa8162d6224707eab34581845c12";

    fetch(selectedCity)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let cityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=alerts&appid=acf8aa8162d6224707eab34581845c12";

            fetch(cityWeather)
                .then(function (newResponse) {
                    console.log(newResponse);
                    return newResponse.json();
                })
                .then(function (newData) {
                    console.log(newData);
                });
        });
};