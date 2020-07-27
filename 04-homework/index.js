const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = students => {
  let studentsPairs = [];

  studentsPairs.push([students[0], students[2]]);
  studentsPairs.push([students[1], students[3]]);
  studentsPairs.push([students[4], students[5]]);

  return studentsPairs;
};

const getPairsThemes = (pairs, themes) => {
  let pairsThemes = [];

  for (const [boy, girl] of pairs) {
    pairsThemes.push([`${boy} і ${girl}`]);
  }

  for (let i = 0; i < pairsThemes.length; i++) {
    pairsThemes[i].push(themes[i]);
  }
  return pairsThemes;
}

const getStudentsMarks = (students, marks) => {
  let studentsMarks = [];

  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }
  return studentsMarks;
}

const getPairsMarks = pairs => {
  let pairsMarks = [...pairs];

  for (let i = 0; i < pairsMarks.length; i++) {
    pairsMarks[i].push(Math.ceil(Math.random() * 5));
  }
  return pairsMarks;
}

const pairs = getPairs(students);
console.log('Розділіть студентів на пари: ', pairs);

const pairsThemes = getPairsThemes(pairs, themes);
console.log('Пари та теми проєктів: ', pairsThemes);

const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

const pairsMarks = getPairsMarks(pairsThemes);
console.log(pairsMarks);
