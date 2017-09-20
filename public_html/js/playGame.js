var groundDiv = document.getElementById("playGround");
var rSize=[11,22,33];
var canvas=d3.select(".playGround")
        .append("svg")
        .attr("width",'100%')
        .attr("height",'100%'); 

var x1=50;
var y1=50;

var circle = canvas.selectAll("circle")
        .data("rSize")
        .enter()
        .append("circle")
        .attr("r",30)
        .attr("cx",x1+'%')
        .attr("cy",y1+'%')
        .attr("fill", "red")
        .on('click',nextCircle);

function nextCircle(){ 
        var a=new Date();
        var n=a.getTime();
        circle.attr("cx",Math.floor((Math.random()*100) +1)+'%')
        circle.attr("cy",Math.floor((Math.random()*100) +1)+'%')
        circle.on('click',nextCircle);
        var b=new Date();
        var c=b.getTime();
        var elapsed = c-n;
        if(elapsed>1000){
           // alert("1000 >");
       }else{
         //  alert("1000<")
       }
}
