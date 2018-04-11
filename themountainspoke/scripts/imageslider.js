var myImage = 0;
imgDisplay();

function imgDisplay() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myImage++;
    if (myImage > x.length) {myImage = 1}    
    x[myImage-1].style.display = "block";  
    setTimeout(imgDisplay, 3500); // Change image every 2 seconds
}



