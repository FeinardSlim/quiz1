var i = 0;
const txt = ["Welcome To Jakarta", "Wonderful Capital City of Indonesia", "Made by Feinard"];
var speed = 100;
var loop = 0;
var interval;

function deleteWriter(currentArray) {
    if (currentArray.length != 0) {
        currentArray = currentArray.substring(0, currentArray.length - 1);
        document.getElementById("mainheader").innerHTML = currentArray;
        clearInterval(interval);
        setTimeout(function() {
            interval = setInterval(deleteWriter.bind(null, currentArray), speed);
        }, 50);
    } else {
        clearInterval(interval);
        console.log("return");
        i = 0;
        loop++;
        if (loop >= txt.length) {
            loop = 0;
        }
        setTimeout(function() {
            interval = setInterval(typeWriter, speed);
        }, speed)
        return;
    }
}

function typeWriter() {
    var currentArray = txt[loop];
    if (i < currentArray.length) {
        document.getElementById("mainheader").innerHTML += currentArray.charAt(i);
        i++;
    } else if (i == currentArray.length) {
        clearInterval(interval);
        setTimeout(function() {
            interval = setInterval(deleteWriter.bind(null, currentArray), speed);
        }, speed)
    }
}

function boot() {
    interval = setInterval(typeWriter, speed);
}