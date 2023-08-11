const refs = {
  bodyEl: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

refs.buttons.addEventListener('click', startBtnClick);
refs.buttons.addEventListener('click', stopBtnClick);

let timerId = null;

function startBtnClick() {
  intervalId = setInterval(() => {
    timerId += 1;
    const onHexChangecolor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = onHexChangecolor;
  }, 1000);
  disabledButtons();
}

function disabledButtons() {
  if (!refs.startButton.disabled) {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
  } else {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
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
