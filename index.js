let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let sessionInput = document.getElementById("session-timer");
let breakInput = document.getElementById("break-timer");
let hourSpan = document.getElementById("hour-span");
let minuteSpan = document.getElementById("minute-span");
let secSpan = document.getElementById("sec-span");
let sessionTimer = true;

const setSessionTimer = (event) => {
  let breakTime = breakInput.value.trim();
  if (breakTime !== "") {
    let time = parseInt(sessionInput.value); // Ensure that the input is a number
    if (!isNaN(time) && time >= 0) {
      // Check if the input is a valid number
      if (time >= 60) {
        hourSpan.innerText = Math.floor(time / 60);
        minuteSpan.innerText = time % 60;
      } else {
        hourSpan.innerText = 0; // Set hour to 0 if less than 60 minutes
        minuteSpan.innerText = time;
      }
    } else {
      alert("Invalid input, please enter a positive number.");
    }
  } 
  else {
    alert("Break time cannot be empty.");
  }
};

const setBreakTimer = () => {
  if (sessionTimer == false) {
    let time = parseInt(breakInput.value); // Ensure that the input is a number
    if (!isNaN(time) && time >= 0) {
      // Check if the input is a valid number

      if (time >= 60) {
        // hourSpan.innerText = Math.floor(time / 60);
        minuteSpan.innerText = time % 60;
      } else {
        hourSpan.innerText = 0; // Set hour to 0 if less than 60 minutes
        minuteSpan.innerText = time;
      }
    }
  }
};

let secondDecreaser = () => {
  let min = parseInt(minuteSpan.innerText);
  if (min !== 0) {
    let sec = parseInt(secSpan.innerText);
    if (sec == 0) sec = 60;
    sec -= 1;
    secSpan.innerText = sec;
  }
};
let minuteDecreaser = () => {
  let min = parseInt(minuteSpan.innerText);
  min -= 1;
  minuteSpan.innerText = min;
  if (minuteSpan.innerText === "0") {
    setTimeout(minIntervalId);
    sessionTimer = false;
  }
};

startBtn.addEventListener("click", setSessionTimer);
startBtn.addEventListener("click", setBreakTimer);
startBtn.addEventListener("click", () => {
  secIntervalId = setInterval(secondDecreaser, 1000);
});
startBtn.addEventListener("click", () => {
  minIntervalId = setInterval(minuteDecreaser, 60000);
});

// setInterval(secondDecreaser,1000);
