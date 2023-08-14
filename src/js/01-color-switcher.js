const bodyEl = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', startBtnClick);
stopButton.addEventListener('click', stopBtnClick);

let timerId = null;

function startBtnClick() {
  intervalId = setInterval(() => {
    timerId += 1;
    const onHexChangecolor = getRandomHexColor();
    bodyEl.style.backgroundColor = onHexChangecolor;
  }, 1000);
  disabledButtons();
}

function disabledButtons() {
  if (!startButton.disabled) {
    startButton.disabled = true;
    stopButton.disabled = false;
  } else {
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

function stopBtnClick() {
  clearInterval(intervalId);
  disabledButtons();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
