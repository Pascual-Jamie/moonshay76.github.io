var s = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townInfo = request.response;
  displayTown(townInfo);
}

//Town information sections

function displayTown(jsonObj) {
    var town = jsonObj['towns'];
    
    for (var i = 0; i < town.length; i++) {
        if (town[i].name == "Franklin" || town[i].name == "Greenville" || town[i].name == "Springfield") { 
            
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');    
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
    
    myH2.textContent = town[i].name;
    myH3.textContent = town[i].motto;
    myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
    myPara2.textContent = 'Current Population: ' + town[i].currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
    myList.textContent = 'Events: ';
        
    var listEvents = town[i].events;
            
    for (var j = 0; j < listEvents.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = listEvents[j];
      myList.appendChild(listItem);
        
    }
    
    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    s.appendChild(myArticle);
            
        }
    }
}