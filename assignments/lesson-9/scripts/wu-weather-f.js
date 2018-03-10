//Use Underground Weather site to populate the town pages with data

var weatherFranklin = new XMLHttpRequest();

weatherFranklin.open('GET', 'http://api.wunderground.com/api/1f7ee438ba530e58/conditions/q/MN/Franklin.json', true);
                     
weatherFranklin.send();

weatherFranklin.onload = function() {
    
    var weatherInfo = JSON.parse(weatherFranklin.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
    
    document.getElementById('highTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('imageIcon').src = weatherInfo.current_observation.icon_url;
        
    document.getElementById('precipitate').innerHTML = weatherInfo.current_observation.precipt_1hr_in;
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('forcast').innerHTML = weatherInfo.current_observation.forecast_url;    
    
    document.getElementById('windOutput').innerHTML = weatherInfo.current_observation.windchill_string;
    
} //end of onload


// Current Conditions for Franklin

