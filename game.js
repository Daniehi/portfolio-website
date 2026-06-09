let score = 0;
let time = 10;
let timer;
let gameActive = false;

let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");

function startGame() {
  score = 0;
  time = 10;
  gameActive = true;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      gameActive = false;
      alert("Game Over! Score: " + score);
    }
  }, 1000);
}

function clickMe() {
  if (!gameActive) {
    startGame();
  }

  score++;
  scoreDisplay.textContent = score;
}
