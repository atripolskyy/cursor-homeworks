/**
 * Функція яка повертає масив випадкових цілих чисел
 *
 * @param {number} length – довжина масиву
 * @param {number} min – мінімальне значення цілого числа
 * @param {number} max – максимальне значення цілого числа
 */
const getRandomArray = (length, min, max) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push( Math.round(Math.random() * (max - min)) + min );
  }
  return randomArray;
}

console.log('getRandomArray(15, 1, 100): ', getRandomArray(15, 1, 100));
