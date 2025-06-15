let timer = 0;
let gold = 0;
let interval;
let gameStarted = false;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function startGame() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("bgMusic").play();
  gameStarted = true;
  timer = 0;
  gold = 0;
  interval = setInterval(updateTimer, 1000);
  gameLoop();
}

function updateTimer() {
  timer++;
  document.getElementById("timer").innerText = timer;
}

// Basit tır nesnesi
let truck = {
  x: 400,
  y: 300,
  width: 40,
  height: 80,
  color: "blue"
};

document.addEventListener("keydown", function (e) {
  if (!gameStarted) return;
  if (e.key === "ArrowLeft") truck.x -= 20;
  if (e.key === "ArrowRight") truck.x += 20;
});

function gameLoop() {
  if (!gameStarted) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tır çiz
  ctx.fillStyle = truck.color;
  ctx.fillRect(truck.x, truck.y, truck.width, truck.height);

  requestAnimationFrame(gameLoop);
}
