const SQUARE_NUMBER = 25;
const SQUARE_SIZE = 50;
const SQUARE_PER_LINE = 5;
const app = document.getElementById(`app`);
let intervalId = null;

const buttonRunCode = document.querySelector(`._button-run-code`);

/**
 * Return random color value, example: rgb(255, 255, 255).
 */
const getRandomColorRgb = () => {
  const redColorHash = Math.round(Math.random() * 255);
  const greenColorHash = Math.round(Math.random() * 255);
  const blueColorHash = Math.round(Math.random() * 255);

  return `rgb(${redColorHash}, ${greenColorHash}, ${blueColorHash})`;
}


/**
 * Return new DOM Node element
 */
const generateBlock = () => {
  const block = document.createElement(`div`);
  block.classList.add(`block`);
  block.style.width = `${SQUARE_SIZE}px`;
  block.style.height = `${SQUARE_SIZE}px`;
  block.style.backgroundColor = getRandomColorRgb();

  return block;
}


/**
 * Generate collection of blocks on the page.
 */
const generateBlocks = () => {
  const blocksWrapper = document.createElement(`div`);
  blocksWrapper.classList.add(`blocks-list`);
  blocksWrapper.style.gridTemplateColumns = `repeat(${SQUARE_PER_LINE}, ${SQUARE_SIZE}px)`;

  for(let i = 0; i < SQUARE_NUMBER; i++) {
    blocksWrapper.appendChild(generateBlock());
  }

  app.innerHTML = ``;
  app.appendChild(blocksWrapper);
}

/**
 * Generate collection of blocks on the page with interval
 */
const generateBlocksInterval = () => {
  intervalId = setInterval(() => {
    generateBlocks();
  }, 1000);
}

// generateBlocks();
generateBlocksInterval();
