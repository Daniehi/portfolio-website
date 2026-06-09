let score = 0;
let time = 10;
let gameRunning = false;
let timer;

let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let clickBtn = document.getElementById("clickBtn");

function startGame() {
  score = 0;
  time = 10;
  gameRunning = true;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      gameRunning = false;
      alert("Game Over! Your score: " + score);
    }
  }, 1000);
}

function increaseScore() {
  if (!gameRunning) {
    startGame();
  }
  score++;
  scoreDisplay.textContent = score;
}
