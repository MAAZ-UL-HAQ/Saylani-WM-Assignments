var min=0,sec=0,msec=0;
var htmlMin = document.getElementById("min");
var htmlSec = document.getElementById("sec");
var htmlMsec = document.getElementById("msec");
var startBtn = document.getElementById("startbtn");
var pauseBtn = document.getElementById("pausebtn");
var resetBtn = document.getElementById("resetbtn");
var lh = document.getElementById("lapHistory");
var lapCounter = 0;
var interval;

function stopWatch(){
    msec += 1;
    htmlMsec.innerHTML = msec;
    if(msec==100){
        msec = 0;
        sec += 1;
        htmlSec.innerHTML = sec;
    }
    if(sec==60){
        sec = 0;
        min += 1;
        htmlMin.innerHTML = min;
    }
}
function start(){
    interval = setInterval(stopWatch,10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}
function pause(){
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    htmlMin.innerHTML = min;
    htmlSec.innerHTML = sec;
    htmlMsec.innerHTML = msec;
    resetBtn.disabled = true;
    pause()
    lh.innerHTML = ""
    lapCounter=0
}
function lap(){
    lapCounter += 1;
    lh.innerHTML += "<br>"+ lapCounter + ".      " + min + ":" + sec + ":" +msec;
}