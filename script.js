var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");

var circle = new Path2D();

circle.arc(300, 300, 290, 0, 2 * Math.PI);


function drawClock(){

    context.strokeStyle = "orange";
    context.lineWidth = 15;
    context.fill(circle);
    context.stroke(circle);

    var R = 290, d, angle, pX, pY, qX, qY;
    for(d = 0; d < 60; d++){
        angle = (d / 60) * 2 * Math.PI;
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.91 * pX;
        qY = 0.91 * pY;
        pX += R + 10; pY += R + 10;
        qX += R + 10; qY += R + 10;
        context.strokeStyle = "orange";

        var line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);
        if(d % 5 == 0){
            context.lineWidth = 15;
        }else{
            context.lineWidth = 3;
        }
        context.stroke(line);
    }


    
}
drawClock();
