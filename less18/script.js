let startTime = 85;
const timerElement = document.getElementById("timer");

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerElement.textContent = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

updateTimerDisplay(startTime);

const interval = setInterval(() => {
  startTime--;

  if (startTime >= 0) {
    updateTimerDisplay(startTime);
  } else {
    clearInterval(interval);
  }
}, 1000);
