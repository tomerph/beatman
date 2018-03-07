

var canvas = document.getElementById("canvas");
var alert = document.getElementById("alert");
var ctx = canvas.getContext("2d");
var posX = canvas.width / 2;
var posY = canvas.height / 2;
var dx = 0;
var dy = 0;
var ballRadius = 25;

function drawBall() {
  ctx.beginPath();
  ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2);
  ctx.shadowBlur = 5;
  ctx.shadowColor = "black";
  ctx.fillStyle = "#e74c3c";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (posX + dx > canvas.width - ballRadius || posX + dx < ballRadius) {
    dx = -dx;
  

  }
    if (posY + dy > canvas.height - ballRadius || posY + dy < ballRadius) {
      dy = -dy;
    }

  posX += dx;
  posY += dy;
}
setInterval(draw(), 10);

function reset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dy = 0;
  dx = 0;
  posY = canvas.height / 2
  posX = canvas.width / 2;
  drawBall();

}

function moveUp() {

  dy = -10;
  dx = 0;
  draw();
}

function moveDown() {
  dy = 10;
  dx = 0;
  draw();
}
function moveLeft() {
  dx = -10;
  dy = 0;
  draw();
}
function moveRight() {
  dx = 10;
  dy = 0;
  draw();
}
