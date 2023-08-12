const refs = {
  bodyEl: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

refs.startButton.addEventListener('click', startBtnClick);
refs.stopButton.addEventListener('click', stopBtnClick);

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

const buttonWidth = 70; 
const spacing = 10; 

refs.startButton.style.position = 'absolute';
refs.startButton.style.top = '50%';
refs.startButton.style.left = `calc(50% - ${buttonWidth + spacing}px)`;
refs.startButton.style.transform = 'translate(-50%, -50%)';
refs.startButton.style.width = `${buttonWidth}px`;

refs.stopButton.style.position = 'absolute';
refs.stopButton.style.top = '50%';
refs.stopButton.style.left = '50%';
refs.stopButton.style.transform = 'translate(-50%, -50%)';
refs.stopButton.style.width = `${buttonWidth}px`;
