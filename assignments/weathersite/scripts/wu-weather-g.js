//Use Underground Weather site to populate the town pages with data

var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'http://api.wunderground.com/api/1f7ee438ba530e58/conditions/q/MN/Greenville.json', true);

weatherGreenville.send();

weatherGreenville.onload = function () {

    var weatherInfo = JSON.parse(weatherGreenville.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;

    document.getElementById('highTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('imageIcon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('precipitate').innerHTML = weatherInfo.current_observation.precip_1hr_in;

    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('forcast').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('winDir').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('windOutput').innerHTML = weatherInfo.current_observation.windchill_string;



} //end of onload


// Current Conditions for Franklin



var currentW = new XMLHttpRequest();

currentW.open('GET', 'http://api.wunderground.com/api/1f7ee438ba530e58/forecast/q/MN/Greenville.json', true);
currentW.send();

currentW.onload = function () {

    var weatherI = JSON.parse(currentW.responseText);
    console.log(weatherI);

    document.getElementById('weatherCurrent').innerHTML = weatherI.forecast.txt_forecast.forecastday["0"].fcttext;


}
