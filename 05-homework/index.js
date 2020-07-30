/**
 * Task #1. Функція яка повертає масив випадкових цілих чисел
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
 * Task #2. Функція що вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 *
 * @param  {array} ...numbers
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


/**
 * Task #3. Функція яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 *
 * @param  {array} ...numbers
 * @returns {number} average - середнє арифметичне всіх переданих в неї аргументів
 */
const getAverage = (...numbers) => {
  const arrayIntNumbers = numbers.filter(currentNumber => Number.isInteger(currentNumber));
  return arrayIntNumbers.reduce((accumulator, item) => accumulator + item, 0) / arrayIntNumbers.length;
}
console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


/**
 * Task #5. Функція яка фільтрує парні числа передані як аргументи функції
 *
 * @param  {array} ...numbers
 * @returns {array} массив непарних чисел переданих як аргументи функції
 */
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(currentNumber => currentNumber % 2 !== 0);
}
console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6): ', filterEvenNumbers(1, 2, 3, 4, 5, 6));


/**
 * Task #8. Функція яка замінює погані слова на зірочки (*)
 *
 * @param  {string} string - фраза що потребує перевірки на погані слова
 * @param  {array} stringsBad - додатковий список поганих слів, необов'язкове
 * @returns  {string} фраза в якій погані слова замінені на зірочки
 */
const replaceBadWords = (string, stringsBad = []) => {
  stringsBad = ['shit', 'fuck', ...stringsBad];

  return string.split(' ').map(word => {
    stringsBad.forEach(string => {
      const replacement = string.replace(/[A-Za-z]/g, '*');
      word = word.replace(string, replacement);
    });
    return word;
  }).join(' ');
}
console.log('replaceBadWords("Are you fucking kidding, shit ass?"): ', replaceBadWords("Are you fucking kidding, shit ass?", ['ass']));
