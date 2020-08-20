/**
 * Return random color value, example: hsl(255, 70%, 32%).
 */
const getRandomColorHsl = () => {
  const hslValue = Math.round(Math.random() * 356);

  return `hsl(${hslValue}, 70%, 32%)`;
}


/**
 * Mark active button. Add styles to target button with appropriate data attribute.
 *
 * @param {string} keyCode
 */
const setActive = (keyCode) => {
  const soundNode = document.getElementById(keyCode);

  if (soundNode) {
    document.querySelector(`.page`).setAttribute(`style`, `background: linear-gradient(to right, ${getRandomColorHsl()}, ${getRandomColorHsl()}`);

    soundNode.currentTime = 0;
    soundNode.play();

    document.querySelectorAll(`.button-item`).forEach(item => {
      item.classList.remove(`button-item--clicked`);
      if (item.dataset.keyCode === keyCode) item.classList.add(`button-item--clicked`);
    });
  }
}


/**
 * Handle event on keyDown
 */
function handleKeydown(e) {
  setActive(e.code);
}


/**
 * Handle event on click
 */
function handleClick(e) {
  const button = e.target.classList.contains(`button-item`) ? e.target : e.target.closest(`.button-item`);

  if (button) setActive(button.dataset.keyCode);
}

document.addEventListener('keydown', handleKeydown);
document.addEventListener('click', handleClick);
