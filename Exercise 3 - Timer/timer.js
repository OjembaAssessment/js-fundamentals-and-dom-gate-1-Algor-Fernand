
let  timer = document.getElementById("myTimer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let resetButton = document.getElementById("reset");

let timeRemaining;
let countdownInterval;

timeRemaining = 0;


function updateTimerDisplay() {
  timer.textContent = timeRemaining;
}


function startTimer() {

  startButton.disabled = true;
  addButton.disabled = true;
  subtractButton.disabled = true;
  resetButton.disabled = true;


  countdownInterval = setInterval(updateCountdown, 1000);
}


function stopTimer() {
 
  startButton.disabled = false;
  addButton.disabled = false;
  subtractButton.disabled = false;
  resetButton.disabled = false;

  clearInterval(countdownInterval);
}


function updateCountdown() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateTimerDisplay();
  } else {
    stopTimer();
  }
}

startButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer);




addButton.addEventListener("click", function() {
  if (timeRemaining >= 0) {
    timeRemaining++;
    updateTimerDisplay();
  }
});

subtractButton.addEventListener("click", function() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateTimerDisplay();
  }
});





resetButton.addEventListener("click", function() {
  timeRemaining = 0;
  updateTimerDisplay();
});


updateTimerDisplay();