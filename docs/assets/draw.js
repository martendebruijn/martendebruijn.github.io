const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = '#000000';
let strokeWidth = 5;

document.getElementById("colorPicker").addEventListener("input", (event) => {
  currentColor = event.target.value;
});

document.getElementById("strokeSize").addEventListener("input", (event) => {
  strokeWidth = event.target.value;
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function getPosition(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  let x, y;
  if (event.touches) {
    x = (event.touches[0].clientX - rect.left) * scaleX;
    y = (event.touches[0].clientY - rect.top) * scaleY;
  } else {
    x = (event.clientX - rect.left) * scaleX;
    y = (event.clientY - rect.top) * scaleY;
  }
  return { x, y };
}

function startDrawing(event) {
  event.preventDefault();
  drawing = true;
  const { x, y } = getPosition(event);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = strokeWidth;
}

function draw(event) {
  if (!drawing) return;
  event.preventDefault();
  const { x, y } = getPosition(event);
  ctx.lineTo(x, y);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = strokeWidth;
  ctx.stroke();
}

function stopDrawing(event) {
  event.preventDefault();
  drawing = false;
  ctx.closePath();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

canvas.addEventListener("touchstart", startDrawing, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", stopDrawing, { passive: false });
