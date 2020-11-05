document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#time-left");
  const startButton = document.querySelector("#start-button");
  const stopButton = document.querySelector("#stop-button");
  const resetButton = document.querySelector("#reset-button");

  let timeLeft = 100;
  //let time = startingMinutes * 60;

  //let timer = setInterval(startCountdown, 1000);

  function startClicked() {
    // const minutes = Math.floor(time / 60);
    // let seconds = time % 60;

    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }

      timeLeftDisplay.innerHTML = timeLeft;

      timeLeft -= 1;
    }, 1000);

    // if (seconds < 10) {
    // seconds = "0" + seconds;
    // }
  }

  /*TO DO: Pause Timer*/
  function stopClicked() {
    clearInterval();
  }

  /*TO DO: Reset the timer to 25 minutes*/
  function resetClicked() {
    timeLeft = 100;
    timeLeftDisplay.innerHTML = timeLeft;
  }

  startButton.addEventListener("click", startClicked);
  stopButton.addEventListener("click", stopClicked);
  resetButton.addEventListener("click", resetClicked);
});
