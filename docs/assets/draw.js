const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

function startDrawing(e) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

function draw(e) {
  if (!drawing) return;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function stopDrawing() {
  drawing = false;
  ctx.closePath();
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});