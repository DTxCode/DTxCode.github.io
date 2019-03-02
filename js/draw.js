var c = document.getElementById("myCanvas");
c.width = $(window).width();
c.height = $(window).height();

var isDown = false, existingX, existingY;
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "white";
ctx.fillStyle = "white";

document.onmousedown = handleMouseDown;

function handleMouseDown(event) {
  var x = event.pageX
  var y = event.pageY

  existingX = x
  existingY = y
  isDown = true

  ctx.fillRect(existingX - 3, existingY - 3, 5, 5);
}

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
  if (isDown) {
    var x = event.pageX
    var y = event.pageY

    ctx.moveTo(existingX, existingY);
    ctx.lineTo(x, y);
    ctx.stroke();

    existingX = x;
    existingY = y;
  }
}

document.onmouseup = handleMouseUp;

function handleMouseUp(event) {
  isDown = false
}

function reset() {
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height);
}
