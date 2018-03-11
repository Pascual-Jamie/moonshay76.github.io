
var high = parseFloat(document.getElementById("highTemp").innerHTML);
var low = parseFloat(document.getElementById("lowTemp").innerHTML);

var s = parseFloat(document.getElementById("windSpeed").innerHTML);
var t = (high + low) / 2;
		
var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
var windC = Math.round(f * 10) / 10;		

    document.getElementById("windOutput").innerHTML = windC;
