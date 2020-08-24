/**
 * Function that return chinese word
 *
 * @param {function} resolve - resolve callback
 * @param {number} length - length of chinese word
 */
const intervalHandler = (resolve, length) => {
  const INTERVAL_TIME = 50;
  let counter = 0;
  let chineseString = ``;

  const intervalId = setInterval(() => {
    if (counter === length) {
      clearInterval(intervalId);
      resolve(chineseString);
    }

    const date = Date.now().toString();
    chineseString += String.fromCharCode(date.substring(date.length - 5));

    counter++;
  }, INTERVAL_TIME);
}

/**
 * Function that return a Promise
 *
 * @param {number} length - length of chinese word
 */
function getRandomChinese(length) {
  return new Promise((resolve) => {
    intervalHandler(resolve, length);
  });
}

getRandomChinese(4).then(resolve => {
  console.log(`Результат getRandomChinese(4): ${resolve}`);
});

