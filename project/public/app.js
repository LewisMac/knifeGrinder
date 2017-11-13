
canvas = document.createElement('canvas');

context = canvas.getContext('2d')

var width = context.canvas.width = 1000;
var height = context.canvas.height = 600;

var drawWidth = 900
var drawHeight = 500

context.strokeRect(50, 50, drawWidth, drawHeight)
context.strokeRect(0, 0, width, height)

// console.log(drawWidth + " " + drawHeight)

window.onload = function(){
  document.body.appendChild(canvas);
};
