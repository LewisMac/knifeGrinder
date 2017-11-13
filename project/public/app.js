
canvas = document.createElement('canvas');

context = canvas.getContext('2d')

var width = context.canvas.width = 1000;
var height = context.canvas.height = 600;

var drawWidth = 900
var drawHeight = 500

context.strokeRect(50, 50, drawWidth, drawHeight)
context.strokeRect(0, 0, width, height)

//start of drawing;
context.beginPath();
context.moveTo(100, 300);
//start of bezier curve drawing;
//cutting edge Curve Points
var cpBX1 = 200
var cpBY1 = 250
var cpBX2 = 300
var cpBY2 = 250
//top edge Curve Points
var cpTX1 = 200
var cpTY1 = 320
var cpTX2 = 150
var cpTY2 = 320

context.bezierCurveTo(cpBX1, cpBY1, cpBX2, cpBY2, 600, 240);
context.lineTo(620, 330)
context.bezierCurveTo(cpTX1, cpTY1, cpTX2, cpTY2, 100, 300)


//end drawing
context.stroke();


// console.log(drawWidth + " " + drawHeight)

window.onload = function(){
  document.body.appendChild(canvas);
};
