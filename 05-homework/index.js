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
    randomArray = [...randomArray, Math.round(Math.random() * (max - min)) + min];
  }
  return randomArray;
}


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
    if (value === maxFrequency) moda = [...moda, key];
  }

  return moda.length > 1 ? moda : moda[0];
}


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


/**
 * Task #5. Функція яка фільтрує парні числа передані як аргументи функції
 *
 * @param  {array} ...numbers
 * @returns {array} массив непарних чисел переданих як аргументи функції
 */
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(currentNumber => currentNumber % 2 !== 0);
}


/**
 * Task #8. Функція яка замінює погані слова на зірочки (*)
 *
 * @param  {string} string - фраза що потребує перевірки на погані слова
 * @param  {array} stringsBad - додатковий список поганих слів, необов'язкове
 * @returns  {string} фраза в якій погані слова замінені на зірочки
 */
const replaceBadWords = (string, stringsBad = []) => {
  let arrayBadWords = ['shit', 'fuck', ...stringsBad];

  return string.split(' ').map(word => {
    arrayBadWords.forEach(string => {
      const replacement = string.replace(/[A-Za-z]/g, '*');
      word = word.replace(string, replacement);
    });
    return word;
  }).join(' ');
}


/**
 * Task #9. Функція яка розбиває кожне слово на умовні склади по 3 букви.
 * Якщо букв менше трьох – не розбиває.
 * Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
 *
 * @param {string} word
 * @returns  {string|array} - повертає слово якщо букв менше трьох, або масив по 3 букви
 */
const divideByThree = word => {
  const PART_LENGTH = 3;
  const wordClean = word.replace(/\s/g, '').toLowerCase();
  let partsArray = [];

  if (wordClean.length < 3) return word.toLowerCase();

  [...wordClean].forEach((item, index) => {
    if (index % PART_LENGTH === 0) {
      partsArray = [...partsArray, [...wordClean].slice(index, index + PART_LENGTH).join('')];
    }
  });

  return partsArray;
}


/**
 * Task #10. Функція яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові, обмежити работу функції 10 буквами.
 *
 * @param {string} word вхідне слово
 * @returns {array}
 */
// const generateCombinations = word => {
//   const MAX_CHARS = 10; // limit of chars to check
//   const arrayChars = word.toLowerCase().slice(0, MAX_CHARS).split('');
//   let shufflings = [];

//   while (true) {
//     let clone = arrayChars.slice();
//     let shuffling = [];
//     let period = 1;

//     while (clone.length) {
//       let index = Math.floor(shufflings.length / period) % clone.length;
//       period *= clone.length;
//       shuffling.push( clone.splice(index,1)[0] );
//     }

//     shufflings.push(shuffling);

//     if (shufflings.length === period) return shufflings;
//   }
// }

// console.log(generateCombinations('man'));


console.log('Task #1. getRandomArray(15, 1, 100): ', getRandomArray(15, 1, 100));
console.log('Task #2. getModa(55, 7, 55, 11, 57, 11, 2.1, 77, 57, 2.1, 23, 2.1, 57, 3, 2.1, 6): ',
  getModa(55, 7, 55, 11, 57, 11, 2.1, 77, 57, 2.1, 23, 2.1, 57, 3, 2.1, 6));

console.log('Task #3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ',
  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('Task #5. filterEvenNumbers(1, 2, 3, 4, 5, 6): ', filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(`Task #8. replaceBadWords('Are you fucking kidding, shit ass?', ['ass']): `,
  replaceBadWords('Are you fucking kidding, shit ass?', ['ass']));

console.log(`Task #9. divideByThree('Commander'): `, divideByThree('Commander'));
