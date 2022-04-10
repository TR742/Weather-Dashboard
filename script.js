const APIKey = "acf8aa8162d6224707eab34581845c12";


function getAPI() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=acf8aa8162d6224707eab34581845c12";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
};

getAPI();
