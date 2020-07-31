const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

/**
 * Task #1. Функція яка повертає список предметів для конкретного студента.
 * Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл.
 *
 * @param {array.element} student
 * @returns {array} - список предметів для student
 */
const getSubjects = student => {
  const setFirstCharUpper = word => {
    return word.toLowerCase()[0].toUpperCase() + word.toLowerCase().substr(1);
  }
  return Object.keys(student.subjects).map(subject => setFirstCharUpper(subject.replace('_', ' ')));
}

/**
 * Task #2. Функція яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
 * Оцінку округліть до 2ого знаку.
 *
 * @param {array.element} student
 * @returns {number} - середня оцінка по усім предметам для переданого student
 */
const getAverageMark = student => {
  const roundTwoDecimal = number => Math.round(number * 100) / 100;
  let countMarks = 0;

  const allMarks = Object.values(student.subjects)
    .map(marks => marks.join(','))
    .join(',')
    .split(',')
    .reduce((accumulator, mark, index, array) => {
      if (countMarks === 0) countMarks = array.length;
      return parseInt(accumulator) + parseInt(mark)
    });

  return roundTwoDecimal(allMarks / countMarks);
}

/**
 * Task #3. Функція яка повертає інформацію загального виду по переданому студенту.
 * ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
 *
 * @param {array.element} student
 * @returns {object} - інформація по переданому student
 */
const getStudentInfo = student => {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
}

/**
 * Task #4. Функція яка повертає імена студентів у алфавітному порядку.
 *
 * @param {array} students
 * @returns {array} - імена студентів у алфавітному порядку
 */
const getStudentsNames = students => {
  return students.map(student => student.name).sort();
}

/**
 * Task #5. Функція яка повертає кращого студента зі списку по показнику середньої оцінки.
 *
 * @param {array} students
 * @returns {string} - ім'я кращого студента зі students по показнику середньої оцінки
 */
const getBestStudent = students => {
  const bestStudent = students.map(student => {
    student.averageMark = getAverageMark(student);
    return student;
  })
  .sort((studentA, studentB) => studentB.averageMark - studentA.averageMark)
  [0];

  return bestStudent.name;
}

/**
 * Task #6. Функція яка повертає обє'кт, в якому ключі це букви у слові,
 * а значення – кількість їх повторень.
 *
 * @param {string} word
 * @returns {object} - обє'кт, в якому ключі це букви у word, а значення - кількість їх повторень
 */
const calculateWordLetters = word => {
  const stringObject = {};
  [...word].map(char => {
    char = char.toLowerCase();
    if (stringObject[char]) {
      stringObject[char] += 1;
    } else {
      stringObject[char] = 1;
    }
  });
  return stringObject;
}

console.log(`Task #1. Список предметів студента ${students[0].name}: `, getSubjects(students[0]));
console.log(`Task #2. Середня оцінка студента ${students[0].name}: ${getAverageMark(students[0])}`);
console.log(`Task #3. Інформація по студенту ${students[0].name}: `, getStudentInfo(students[0]));
console.log('Task #4. Імена студентів у алфавітному порядку: ', getStudentsNames(students));
console.log(`Task #5. Ім'я кращого студента: ${getBestStudent(students)}`);
console.log(`Task #6. Обє'кт, в якому ключі це букви, а значення - кількість їх повторень. Слово: тест `, calculateWordLetters('тест'));
