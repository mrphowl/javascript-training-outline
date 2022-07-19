/**
 * JS-202: Events And Triggers - Etch-a-sketch
 */
const shakeButtonClass = 'shake';
const canvasId = 'etch-a-sketch';
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector(`#${canvasId}`);
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(`button.${shakeButtonClass}`);
// set up our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
const MOVE_AMOUNT = Math.floor(ctx.lineWidth / 2);
// value used when we increment the hue in hsl
const HUE_STEP = 5;

const { width, height } = canvas;
// coordinates
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// set the starting position in the canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
// set the initial color (Red)
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// draw the dot
ctx.stroke();

// write a draw function
function draw({ key }) {
  ctx.beginPath();
  // move to the current location
  ctx.moveTo(x, y);

  // increment the hue
  hue += HUE_STEP;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // set the new location depending on the arrow key pressed
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handler for the keys
function handleKey(e) {
  // using regex here...
  if (e.key.match(/^Arrow(Up|Down|Left|Right)$/)) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear or shake function
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.classList.remove(shakeButtonClass);
}

function shake() {
  canvas.classList.add(shakeButtonClass);
  canvas.addEventListener('animationend', clearCanvas, { once: true });
  // setTimeout(() => {
  //   canvas.classList.remove(shakeButtonClass);
  // }, 1000);
}

shakeButton.addEventListener('click', shake);

// listen for arrow keys
window.addEventListener('keydown', handleKey);
