const pomodoroDuration = 25 * 60; //25 minutes in seconds
let timeLeft = pomodoroDuration;
let isTimerOn = false;
let timeLeftDisplay = "25:00";

const timer = setInterval(countdown, 1000);

function startClicked() {
  isTimerOn = true;
}

function stopClicked() {
  isTimerOn = false;
}

function resetClicked() {
  timeLeft = pomodoroDuration;
  timeDisplay();
  isTimerOn = false;
}

function countdown() {
  if (isTimerOn == true && timeLeft > 0) {
    timeLeft -= 1;
    timeDisplay();
  }
}

function timeDisplay() {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;

  if (second < 10) {
    second = "0" + second;
  }

  timeLeftDisplay = `${minute}:${second}`;

  document.getElementById("time-left").innerHTML = timeLeftDisplay;
}
