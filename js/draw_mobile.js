var c = document.getElementById("myCanvas");
c.width = $(window).width();
c.height = $(window).height();

var isDown = false,
  existingX, existingY;
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "white";
ctx.fillStyle = "white";

c.ontouchstart = handleTouchStart;

function handleTouchStart(event) {
  event.preventDefault();
  var x = event.changedTouches[0].pageX;
  var y = event.changedTouches[0].pageY;

  existingX = x
  existingY = y
  isDown = true

  ctx.fillRect(existingX - 3, existingY - 3, 5, 5);
}

c.ontouchmove = handleTouchMove;

function handleTouchMove(event) {
  if (isDown) {
    event.preventDefault();

    var x = event.changedTouches[0].pageX;
    var y = event.changedTouches[0].pageY;

    ctx.moveTo(existingX, existingY);
    ctx.lineTo(x, y);
    ctx.stroke();

    existingX = x;
    existingY = y;
  }
}

c.ontouchend = handleTouchEnd;
c.ontouchcancel = handleTouchEnd;

function handleTouchEnd(event) {
  isDown = false
  event.preventDefault();
}

function reset() {
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height);
}
