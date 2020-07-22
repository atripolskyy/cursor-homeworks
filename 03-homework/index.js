/**
 * Task #1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
 */
const getMaxDigit = number => {
  const numberArray = number.toString().split(``);
  return Math.max(...numberArray);
}

/**
 * Task #2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.
 */
const getPow = (number, exponent) => {
  let base = number;
  for (let i = exponent; i > 1; i--) {
    base *= number;
  }
  return base;
}

/**
 * Task #3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
 */
const getFirstUpper = word => {
  const newWord = word.toLowerCase();
  return newWord[0].toUpperCase() + newWord.substr(1);
}

/**
 * Task #4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
 */
const getSalary = salary => {
  const taxPercent = 19.5;
  const tax = salary * taxPercent / 100;
  return salary - tax;
}

/**
 * Task #5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 */
const getRandomNumber = (n, m) => {
  return Math.ceil( Math.random() * (m - n) ) + n;
}

/**
 * Task #6. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 */
const countLetter = (character, word) => {
  const letterArray = word.toLowerCase().split(``);
  let count = 0;
  for (let i = 0; i <= letterArray.length; i++) {
    if (character.toLowerCase() === letterArray[i]) count++;
  }
  return count;
}

/**
 * Task #7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
 * Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
 */
const convertCurrency = value => {
  const CURRENCY_RATE = 25; // $1 = 25UAH
  const regex = /(\d*)(\$|UAH|uah)/g;
  const found = [...value.matchAll(regex)];
  if (found.length === 0) return `Помилка! Введіть долари або гривні. Приклад: 1$, 1uah, 1UAH.`;

  const amount = found[0][1];
  const currency = found[0][2].toLowerCase();

  switch (currency) {
    case '$':
      return `${amount * CURRENCY_RATE} грн.`;
    case 'uah':
      return `${amount / CURRENCY_RATE}$`;
    default:
      return `Помилка! Введіть долари або гривні. Приклад: 1$, 1uah, 1UAH.`;
  }
}

/**
 * Task #9. Створіть функцію, яка видаляє всі букви з речення.
 */
const deleteLetters = (character, word) => {
  word = word.toLowerCase();
  character = character.toLowerCase();
  const regExpPattern = new RegExp(character, `g`);

  return word.replace(regExpPattern, ``);
}

console.log(`Task #1: `, getMaxDigit(1236));
console.log(`Task #2: `, getPow(2, 4));
console.log(`Task #3: `, getFirstUpper(`вЛАД`));
console.log(`Task #4: `, getSalary(1000));
console.log(`Task #5: `, getRandomNumber(1, 10));
console.log(`Task #6: `, countLetter(`а`, `Асталавіста`));
console.log(`Task #7: `, convertCurrency(`250`));
console.log(`Task #9: `, deleteLetters(`a`, `blablabla`));
