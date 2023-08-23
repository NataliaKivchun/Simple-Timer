function incrTimer() {
  ++timerTime;
  time.textContent = `${timerTime}`;
}

function handleStartTimer() {
  timeout = setInterval(incrTimer, 1000);
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
}

function handleStopTimer() {
  clearInterval(timeout);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "");
  resetBtn.removeAttribute("disabled");
}

function handleResetTimer() {
  clearInterval(timeout);
  timerTime = 0;
  time.textContent = `${timerTime}`;
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "");
  resetBtn.setAttribute("disabled", "");
}

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const time = document.querySelector(".timer__time");

startBtn.addEventListener("click", handleStartTimer);
stopBtn.addEventListener("click", handleStopTimer);
resetBtn.addEventListener("click", handleResetTimer);

stopBtn.setAttribute("disabled", "");
resetBtn.setAttribute("disabled", "");

let timerTime = 0;
let timeout;
time.textContent = `${timerTime}`;

