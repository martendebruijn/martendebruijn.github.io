const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

// 🛠 Zorg dat het canvas altijd correct is geschaald
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// 🚀 Fix coördinaatberekening door schaalfactor te gebruiken
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

// 🎨 Start tekenen
function startDrawing(event) {
  event.preventDefault();
  drawing = true;
  const { x, y } = getPosition(event);
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// 🖌 Teken terwijl je beweegt
function draw(event) {
  if (!drawing) return;
  event.preventDefault();
  const { x, y } = getPosition(event);
  ctx.lineTo(x, y);
  ctx.stroke();
}

// ⏹ Stop met tekenen
function stopDrawing(event) {
  event.preventDefault();
  drawing = false;
  ctx.closePath();
}

// 📏 Zorg dat canvas altijd de juiste grootte heeft
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// 🎯 Event listeners voor muis en touch
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

canvas.addEventListener("touchstart", startDrawing, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", stopDrawing, { passive: false });
