const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/**
 * #1. Функція яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
 *
 * @returns {number} - кількість податків ви заплатите як IT-спеціаліст в якійсь з країн
 */
const getMyTaxes = function(salary) {
  return salary * this.tax;
}


/**
 * Task #2. Функція яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax * middleSalary).
 * Функція повинна викликатись через call та працювати з даними через this
 *
 * @returns {number} - кількість податків від середньої ЗП які платять IT-спеціалісти у кожній країні
 */
const getMiddleTaxes = function() {
  return this.tax * this.middleSalary;
}


/**
 * #3. Функція яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
 * Функція повинна викликатись через call та працювати з даними через this
 *
 * @returns {number} - скільки всього податків платять IT-спеціалісти у кожній країні
 */
const getTotalTaxes = function() {
  return this.tax * this.middleSalary * this.vacancies;
}


/**
 * #4. Функція яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
 * Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
 * taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes;
 *
 * @returns {object} - return object in console.dir()
 */
const getMySalary = function() {
  const MIN_SALARY = 1500;
  const MAX_SALARY = 2000;
  const tax = this.tax;

  const salaryInterval = setInterval(function() {
    let salary = Math.round(Math.random() * (MAX_SALARY - MIN_SALARY)) + MIN_SALARY;
    let taxes = salary * tax;
    let profit = salary - taxes;

    console.dir( { salary, taxes, profit } );
  }, 10000);
}


console.log(`Task #1. getMyTaxes.call(ukraine, 100): `, getMyTaxes.call(ukraine, 100));
console.log(`Task #2. getMiddleTaxes.call(latvia): `, getMiddleTaxes.call(latvia));
console.log(`Task #3. getTotalTaxes.call(litva): `, getTotalTaxes.call(litva));
console.log(`Task #4. getMySalary.call(ukraine):`);
getMySalary.call(ukraine);
