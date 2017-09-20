var groundDiv = document.getElementById("playGround");
var score=0;
var rSize = [11, 22, 33];
var canvas = d3.select(".playGround")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%');

var x1 = 50;
var y1 = 50;

var circle = canvas.selectAll("circle")
        .data("rSize")
        .enter()
        .append("circle")
        .attr("r", 30)
        .attr("cx", x1 + '%')
        .attr("cy", y1 + '%')
        .attr("fill", "red")
        .on('click', nextCircle);
var a, n;
function nextCircle() {
    a = new Date();
    n = a.getTime();

    circle.attr("cx", Math.floor((Math.random() * 100) + 1) + '%')
    circle.attr("cy", Math.floor((Math.random() * 100) + 1) + '%')
    circle.on('click', timeThread);
    var elapsed = c - n;
}
var c, b;
function timeThread() {
    b = new Date();
    c = b.getTime();
    if((c-n)<2000){
        nextCircle();
    }else{
        alert("Time passed");
    }
}

