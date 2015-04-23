
var clickedTime, createdTime;
//Functions
function $(element) {
    "use strict";
    return document.getElementById(element);
}
function getRandomColor() {
    "use strict";
    var letters = "0123456789ABCDEF", color = '#', i;
    for (i = 0; i < 6; i += 1) {
        color += letters.charAt(Math.round(Math.random() * 15));
    }
    return color;
}
function makeBox() {
    "use strict";
    var time, element_x, element_y, circle, element_color;
    time = Math.random() * 5000;
    element_x = Math.random() * 50;
    element_y = Math.random() * 30;
    circle = Math.round(Math.random());
    element_color = getRandomColor();
    if (circle === 1) {
        $("Box").style.borderRadius = 100 + "%";
    } else {
        $('Box').style.borderRadius = 0;
    }
    $("Box").style.backgroundColor = element_color;
    $("Box").style.marginLeft = element_x + "%";
    $("Box").style.marginTop = element_y + "%";
     
    setTimeout(function () {
        createdTime = Date.now();
        $("Box").style.visibility = "visible";
    }, time);
}
document.getElementById("Box").onclick = function () {
    "use strict";
    var speed;
    clickedTime = Date.now();
    this.style.visibility = "hidden";
    speed = (clickedTime - createdTime) / 1000;
    document.getElementById("disptime").innerHTML = "Reaction time: " + speed + "s";
    makeBox();
};
makeBox();