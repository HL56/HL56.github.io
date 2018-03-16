
var mytime = setInterval(function(){
    getTime();
},1000);
function getTime(){
    var d = new Date();
    var t = d.toLocaleString();
    document.getElementById("time").innerHTML = t;
}
function stopTime(){
    clearInterval(mytime);
}
