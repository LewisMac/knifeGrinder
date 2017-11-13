
var canvas = document.createElement('canvas');

var context = canvas.getContext('2d')
// var context = canvas.getContext('2d')
// var context_points = canvas.getContext('2d')

var width = context.canvas.width = 1000;
var height = context.canvas.height = 600;

var drawWidth = 900
var drawHeight = 500

context.strokeRect(50, 50, drawWidth, drawHeight)
context.strokeRect(0, 0, width, height)

//start of drawing;
context.beginPath();
context.moveTo(100, 300);

//cutting edge Curve Points
var cpBX1 = 200;
var cpBY1 = 250;
var cpBX2 = 300;
var cpBY2 = 250;
var bladeEndX = 600;
var bladeEndY = 240;
//top edge Curve Points
var cpTX1 = 200;
var cpTY1 = 320;
var cpTX2 = 150;
var cpTY2 = 320;
var topEndX = 100;
var topEndY = 300;


//start of bezier curve blade drawings;
context.bezierCurveTo(cpBX1, cpBY1, cpBX2, cpBY2, bladeEndX, bladeEndY);
context.lineTo(620, 330)
context.bezierCurveTo(cpTX1, cpTY1, cpTX2, cpTY2, topEndX, topEndY)

context.fillStyle = 'white';
context.fill();

context.globalCompositeOperation = 'destination-over';


//circles over Bezier Blade Handles


context.lineTo(cpBX1, cpBY1);
context.moveTo(cpBX1+5, cpBY1);
context.arc(cpBX1, cpBY1, 5, 0, Math.PI * 2, false)
context.moveTo(bladeEndX, bladeEndY)
context.lineTo(cpBX2, cpBY2);
context.moveTo(cpBX2+5, cpBY2);
context.arc(cpBX2, cpBY2, 5, 0, Math.PI * 2, false)

context.fillStyle = 'black';
context.fill();

//end drawing
context.stroke();





// console.log(drawWidth + " " + drawHeight)

window.onload = function(){
  document.body.appendChild(canvas);
};
