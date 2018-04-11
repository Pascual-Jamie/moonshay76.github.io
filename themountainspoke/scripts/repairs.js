var xmlhttp = new XMLHttpRequest();



xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);






        var tuneUpOne = $('#tuneUpOne').text(myObj.repair[0].tuneUpOne);
        var tuneUpTwo = $('#tuneUpTwo').text(myObj.repair[0].tuneUpTwo);
        var tuneUpThree = $('#tuneUpThree').text(myObj.repair[0].tuneUpThree);
        var tuneUpFour = $('#tuneUpFour').text(myObj.repair[0].tuneUpFour);
        var tuneUpFive = $('#tuneUpFive').text(myObj.repair[0].tuneUpFive);


        var drivetrainOne = $('#drivetrainOne').text(myObj.repair[1].drivetrainOne);
        var drivetrainTwo = $('#drivetrainTwo').text(myObj.repair[1].drivetrainTwo);
        var drivetrainThree = $('#drivetrainThree').text(myObj.repair[1].drivetrainThree);
        var drivetrainFour = $('#drivetrainFour').text(myObj.repair[1].drivetrainFour);
        var drivetrainFive = $('#drivetrainFive').text(myObj.repair[1].drivetrainFive);
        var drivetrainSix = $('#drivetrainSix').text(myObj.repair[1].drivetrainSix);

        var shifterOne = $('#shifterOne').text(myObj.repair[2].shifterOne);
        var shifterTwo = $('#shifterTwo').text(myObj.repair[2].shifterTwo);
        var shifterThree = $('#shifterThree').text(myObj.repair[2].shifterThree);
        var shifterFour = $('#shifterFour').text(myObj.repair[2].shifterFour);
        var shifterFive = $('#shifterFive').text(myObj.repair[2].shifterFive);


        var wheelsOne = $('#wheelsOne').text(myObj.repair[3].wheelsOne);
        var wheelsTwo = $('#wheelsTwo').text(myObj.repair[3].wheelsTwo);
        var wheelsThree = $('#wheelsThree').text(myObj.repair[3].wheelsThree);
        var wheelsFour = $('#wheelsFour').text(myObj.repair[3].wheelsFour);
        var wheelsFive = $('#wheelsFive').text(myObj.repair[3].wheelsFive);
        var wheelsSix = $('#wheelsSix').text(myObj.repair[3].wheelsSix);
        var wheelsSeven = $('#wheelsSeven').text(myObj.repair[3].wheelsSeven);
        var wheelsEight = $('#wheelsEight').text(myObj.repair[3].wheelsEight);



        var handleBarsOne = $('#handleBarsOne').text(myObj.repair[4].handleBarsOne);
        var handleBarsTwo = $('#handleBarsTwo').text(myObj.repair[4].handleBarsTwo);
        var handleBarsThree = $('#handleBarsThree').text(myObj.repair[4].handleBarsThree);
        var handleBarsFour = $('#handleBarsFour').text(myObj.repair[4].handleBarsFour);
        var handleBarsFive = $('#handleBarsFive').text(myObj.repair[4].handleBarsFive);
        var handleBarsSix = $('#handleBarsSix').text(myObj.repair[4].handleBarsSix);
        var handleBarsSeven = $('#handleBarsSeven').text(myObj.repair[4].handleBarsSeven);
        var handleBarsEight = $('#handleBarsEight').text(myObj.repair[4].handleBarsEight);


        var installsOne = $('#installsOne').text(myObj.repair[5].installsOne);
        var installsTwo = $('#installsTwo').text(myObj.repair[5].installsTwo);
        var installsThree = $('#installsThree').text(myObj.repair[5].installsThree);
        var installsFour = $('#installsFour').text(myObj.repair[5].installsFour);
        var installsFive = $('#installsFive').text(myObj.repair[5].installsFive);
        var installsSix = $('#installsSix').text(myObj.repair[5].installsSix);
        var installsSeven = $('#installsSeven').text(myObj.repair[5].installsSeven);
        var installsEight = $('#installsEight').text(myObj.repair[5].installsEight);


    }
};

//xmlhttp.open('GET', "data/repairs.json", true);
xmlhttp.open("GET", "https://moonshay76.github.io/assignments/themountainspoke/data/repairs.json", true);
xmlhttp.send();
