/**
 * Функція яка повертає масив випадкових цілих чисел
 *
 * @param {number} length – довжина масиву
 * @param {number} min – мінімальне значення цілого числа
 * @param {number} max – максимальне значення цілого числа
 * @returns {array} масив випадкових цілих чисел довжиною length
 */
const getRandomArray = (length, min, max) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push( Math.round(Math.random() * (max - min)) + min );
  }
  return randomArray;
}

console.log('getRandomArray(15, 1, 100): ', getRandomArray(15, 1, 100));

/**
 * Вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 *
 * @param  {array} numbers
 * @returns {number|array} мода серед цілих чисел
 */
const getModa = (...numbers) => {
  const countNumbers = {};
  let maxFrequency = 0;
  let moda = [];

  numbers.filter(currentNumber => Number.isInteger(currentNumber))
    .forEach(currentNumber => {
      let frequency = countNumbers[currentNumber] ? countNumbers[currentNumber] : 0;
      frequency++;

      if (frequency > maxFrequency) {
        maxFrequency = frequency;
      }

      countNumbers[currentNumber] = frequency;
    });

  for (const [key, value] of Object.entries(countNumbers)) {
    if (value === maxFrequency) moda.push(key);
  }

  return moda.length > 1 ? moda : moda[0];
}

console.log( 'getModa(55, 7, 55, 11, 57, 11, 2.1, 77, 57, 2.1, 23, 2.1, 57, 3, 2.1, 6): ', getModa(55, 7, 55, 11, 57, 11, 2.1, 77, 57, 2.1, 23, 2.1, 57, 3, 2.1, 6) );
