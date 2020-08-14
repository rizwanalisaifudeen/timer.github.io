var division1 = document.getElementById("timer");
var node1 = document.createElement("div");
division1.appendChild(node1);
var timeinCs = 0;
var reference;
var inputText;

function start() {

    if (!reference) {
        reference = setInterval(() => {
            printTime(timeinCs);
            timeinCs++;

        }, 10)
    }

}

function printTime(cctime) {

    var cc = parseInt(cctime % 100);
    var sec = parseInt((cctime / 100) % 60);
    var min = parseInt(cctime / 6000);
    node1.innerHTML = min + ":" + sec + ":" + cc;
}

function pause() {

    clearInterval(reference);
    reference = null;
}


function reset() {
    clearInterval(reference);
    reference = null;
    node1.innerHTML = "00:00:00";
    timeinCs = 0;
}