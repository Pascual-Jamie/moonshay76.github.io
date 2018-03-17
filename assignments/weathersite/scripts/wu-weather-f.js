//Use Underground Weather site to populate the town pages with data

var weatherFranklin = new XMLHttpRequest();

weatherFranklin.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/conditions/q/MN/Franklin.json', true);

weatherFranklin.send();

weatherFranklin.onload = function () {

    var weatherInfo = JSON.parse(weatherFranklin.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;

    document.getElementById('precipitate').innerHTML = weatherInfo.current_observation.precip_1hr_in;

    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('forcast').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('winDir').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('windOutput').innerHTML = weatherInfo.current_observation.windchill_string;

    document.getElementById('imageIcon').src = weatherInfo.current_observation.icon_url.replace("http", "https");


} //end of onload


// Current Conditions for Franklin



var currentW = new XMLHttpRequest();

currentW.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/forecast/q/MN/Franklin.json', true);
currentW.send();

currentW.onload = function () {

    var weatherI = JSON.parse(currentW.responseText);
    console.log(weatherI);

    document.getElementById('weatherCurrent').innerHTML = weatherI.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowTemp').innerHTML = weatherI.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('highTemp').innerHTML = weatherI.forecast.simpleforecast.forecastday["0"].high.fahrenheit;

}



//10 day forecast


var diezdia =new XMLHttpRequest();

diezdia.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/forecast10day/q/MN/Franklin.json', true);
diezdia.send();

diezdia.onload = function () {
    
   var dayten = JSON.parse(diezdia.responseText); 
    console.log(dayten);
    
    //day 1
    
    var weekday = dayten.forecast.simpleforecast.forecastday['0'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['0'].date.day;
    
    document.getElementById('day1').innerHTML = weekday + " " + date;
    document.getElementById('imgd1').src = dayten.forecast.simpleforecast.forecastday["0"].icon_url.replace("http", "https");
    document.getElementById('high1').innerHTML = dayten.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low1').innerHTML = dayten.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    
    
  //Day 2
    
    var weekday = dayten.forecast.simpleforecast.forecastday['1'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['1'].date.day;
    
    document.getElementById('day2').innerHTML = weekday + " " + date;
    document.getElementById('imgd2').src = dayten.forecast.simpleforecast.forecastday["1"].icon_url.replace("http", "https");
    document.getElementById('high2').innerHTML = dayten.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('low2').innerHTML = dayten.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    
   
 //Day 3
    
    var weekday = dayten.forecast.simpleforecast.forecastday['2'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['2'].date.day;
    
    document.getElementById('day3').innerHTML = weekday + " " + date;
    document.getElementById('imgd3').src = dayten.forecast.simpleforecast.forecastday["2"].icon_url.replace("http", "https");
    document.getElementById('high3').innerHTML = dayten.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('low3').innerHTML = dayten.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
       
    
//Day 4
    
    var weekday = dayten.forecast.simpleforecast.forecastday['3'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['3'].date.day;
    
    document.getElementById('day4').innerHTML = weekday + " " + date;
    document.getElementById('imgd4').src = dayten.forecast.simpleforecast.forecastday["3"].icon_url.replace("http", "https");
    document.getElementById('high4').innerHTML = dayten.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    document.getElementById('low4').innerHTML = dayten.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
    
    
  //Day 5
    
    var weekday = dayten.forecast.simpleforecast.forecastday['4'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['4'].date.day;
    
    document.getElementById('day5').innerHTML = weekday + " " + date;
    document.getElementById('imgd5').src = dayten.forecast.simpleforecast.forecastday["4"].icon_url.replace("http", "https");
    document.getElementById('high5').innerHTML = dayten.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    document.getElementById('low5').innerHTML = dayten.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
      
    
  //Day 6
    
    var weekday = dayten.forecast.simpleforecast.forecastday['5'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['5'].date.day;
    
    document.getElementById('day6').innerHTML = weekday + " " + date;
    document.getElementById('imgd6').src = dayten.forecast.simpleforecast.forecastday["5"].icon_url.replace("http", "https");
    document.getElementById('high6').innerHTML = dayten.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    document.getElementById('low6').innerHTML = dayten.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
      
    
   //Day 7
    
    var weekday = dayten.forecast.simpleforecast.forecastday['6'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['6'].date.day;
    
    document.getElementById('day7').innerHTML = weekday + " " + date;
    document.getElementById('imgd7').src = dayten.forecast.simpleforecast.forecastday["6"].icon_url.replace("http", "https");
    document.getElementById('high7').innerHTML = dayten.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    document.getElementById('low7').innerHTML = dayten.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
    
    
    //Day 8
    
    var weekday = dayten.forecast.simpleforecast.forecastday['7'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['7'].date.day;
    
    document.getElementById('day8').innerHTML = weekday + " " + date;
    document.getElementById('imgd8').src = dayten.forecast.simpleforecast.forecastday["7"].icon_url.replace("http", "https");
    document.getElementById('high8').innerHTML = dayten.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    document.getElementById('low8').innerHTML = dayten.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
    
   //Day 9
    
    var weekday = dayten.forecast.simpleforecast.forecastday['8'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['8'].date.day;
    
    document.getElementById('day9').innerHTML = weekday + " " + date;
    document.getElementById('imgd9').src = dayten.forecast.simpleforecast.forecastday["8"].icon_url.replace("http", "https");
    document.getElementById('high9').innerHTML = dayten.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('low9').innerHTML = dayten.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
   
  //Day 10
    
    var weekday = dayten.forecast.simpleforecast.forecastday['9'].date.weekday_short;
    var date = dayten.forecast.simpleforecast.forecastday['9'].date.day;
    
    document.getElementById('day10').innerHTML = weekday + " " + date;
    document.getElementById('imgd10').src = dayten.forecast.simpleforecast.forecastday["9"].icon_url.replace("http", "https");
    document.getElementById('high10').innerHTML = dayten.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
    document.getElementById('low10').innerHTML = dayten.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
      
}