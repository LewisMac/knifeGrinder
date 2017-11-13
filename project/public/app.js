
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
context.bezierCurveTo(200, 250, 300, 250, 600, 240);
context.lineTo(620, 330)
context.bezierCurveTo(200, 320, 150, 320, 100, 300)


//end drawing
context.stroke();


// console.log(drawWidth + " " + drawHeight)

window.onload = function(){
  document.body.appendChild(canvas);
};
