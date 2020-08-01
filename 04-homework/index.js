const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const MAX_MARK_VALUE = 5;

const getPairs = students => {
  let studentsPairs = [];

  studentsPairs = [...studentsPairs, [students[0], students[2]]];
  studentsPairs = [...studentsPairs, [students[1], students[3]]];
  studentsPairs = [...studentsPairs, [students[4], students[5]]];

  return studentsPairs;
};

const getPairsThemes = (pairs, themes) => {
  let pairsThemes = [];

  for (const [boy, girl] of pairs) {
    pairsThemes = [...pairsThemes, [`${boy} і ${girl}`]];
  }

  for (let i = 0; i < pairsThemes.length; i++) {
    pairsThemes[i] = [...pairsThemes[i], themes[i]];
  }
  return pairsThemes;
}

const getStudentsMarks = (students, marks) => {
  let studentsMarks = [];

  for (let i = 0; i < students.length; i++) {
    studentsMarks = [...studentsMarks, [students[i], marks[i]]];
  }
  return studentsMarks;
}

const getPairsMarks = pairsWithTheme => {
  let pairsMarks = [...pairsWithTheme];

  for (let i = 0; i < pairsMarks.length; i++) {
    pairsMarks[i] = [...pairsMarks[i], Math.ceil(Math.random() * MAX_MARK_VALUE)];
  }
  return pairsMarks;
}

const pairs = getPairs(students);
console.log('Розділіть студентів на пари: ', pairs);

const pairsThemes = getPairsThemes(pairs, themes);
console.log('Пари та теми проєктів: ', pairsThemes);

const studentsMarks = getStudentsMarks(students, marks);
console.log('Оцінки(marks) зі студентом: ', studentsMarks);

const pairsMarks = getPairsMarks(pairsThemes);
console.log('Для кожної пари випадкова оцінка(від 1 до 5) за проєкт: ', pairsMarks);
