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
  return word.toLowerCase()[0].toUpperCase() + word.toLowerCase().substr(1);
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
  return Math.round( Math.random() * (m - n) ) + n;
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
 * Task #8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
 */
const getRandomPassword = (passLength = 8) => {
  let numsArray = [];
  for (let i = 0; i < passLength; i++) {
    numsArray.push( Math.floor(Math.random() * 10) );
  }
  return numsArray.join(``);
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

/**
 * Task #10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
 */
const isPalyndrom = word => {
  const cleanWord = word.toLowerCase().replace(/\s/g, ``);
  const charArrayReverse = cleanWord.split(``).reverse().join(``);

  return cleanWord === charArrayReverse;
}

/**
 * Task #11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
 */
const deleteDuplicateLetter = sentence => {
  const sentenceNoSpaces = sentence.replace(/\s/g, ``);
  const charArray = sentenceNoSpaces.toLowerCase().split(``);

  // count each character in sentence
  let countChars = {};
  for (let i = 0; i < charArray.length; i++) {
    if (countChars[charArray[i]]) {
      countChars[charArray[i]]++;
    } else {
      countChars[charArray[i]] = 1;
    }
  }

  // get characters which we will remove later
  let charsToReplace = [];
  for (const [key, value] of Object.entries(countChars)) {
    if (value > 1) {
      charsToReplace.push(key.toUpperCase());
      charsToReplace.push(key);
    }
  }
  const replacePattern = `[${charsToReplace.join('')}]`;
  const regExpPattern = new RegExp(replacePattern, `g`);

  return sentenceNoSpaces.replace(regExpPattern, ``);
}

console.log(`Task #1: `, getMaxDigit(1236));
console.log(`Task #2: `, getPow(2, 4));
console.log(`Task #3: `, getFirstUpper(`вЛАД`));
console.log(`Task #4: `, getSalary(1000));
console.log(`Task #5: `, getRandomNumber(1, 3));
console.log(`Task #6: `, countLetter(`а`, `Асталавіста`));
console.log(`Task #7: `, convertCurrency(`250uah`));
console.log(`Task #8: `, getRandomPassword(4));
console.log(`Task #9: `, deleteLetters(`a`, `blablabla`));
console.log(`Task #10: `, isPalyndrom(`Я несу гУсеНя`));
console.log(`Task #11: `, deleteDuplicateLetter(`Бісквіт був дуже ніжним`));
