/**
 * Return random color value, example: hsl(255, 70%, 32%).
 */
const getRandomColorHsl = () => {
  const hslValue = Math.round(Math.random() * 356);

  return `hsl(${hslValue}, 70%, 32%)`;
}

function handleKeydown(e) {
  const soundNode = document.getElementById(e.code)

  if (soundNode) {

    document.querySelector(`.page`).setAttribute(`style`, `background: linear-gradient(to right, ${getRandomColorHsl()}, ${getRandomColorHsl()}`);

    soundNode.currentTime = 0;
    soundNode.play();

    document.querySelectorAll(`.button-item`).forEach(item => {
      item.classList.remove(`button-item--clicked`);
      if (item.dataset.keyCode === e.code) item.classList.add(`button-item--clicked`);
    });
  }
}


function handleClick(e) {
  e.stopPropagation();

  const soundNode = document.getElementById(e.target.dataset.keyCode)

  if (soundNode) {
    document.querySelector(`.page`).setAttribute(`style`, `background: linear-gradient(to right, ${getRandomColorHsl()}, ${getRandomColorHsl()}`);

    soundNode.currentTime = 0;
    soundNode.play();

    document.querySelectorAll(`.button-item`).forEach(item => {
      item.classList.remove(`button-item--clicked`);
      if (item.dataset.keyCode === e.target.dataset.keyCode) item.classList.add(`button-item--clicked`);
    });
  }
}

document.addEventListener('keydown', handleKeydown);
document.addEventListener('click', handleClick);
