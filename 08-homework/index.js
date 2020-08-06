/**
 * Kлас Student.
 */
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.arrayMarks = [5, 4, 4, 5];
    this.isDismiss = false;

    this.getInfo = function() {
      return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    };
    this.getAverageMark = function() {
      return Math.round(this.arrayMarks.reduce((accumulator, mark) => accumulator + mark, 0) / this.arrayMarks.length * 100) / 100;
    };
    this.dismiss = function() { return this.isDismiss = true; };
    this.recover = function() { return this.isDismiss = false; };
  }

  get marks() {
    if (!this.isDismiss) {
      return this.arrayMarks;
    } else return null;
  }

  set marks(mark) {
    if (!this.isDismiss) {
      this.arrayMarks.push(mark);
    }
  }
}

/**
 * Kлас BudgetStudent, який повністю наслідує клас Student.
 * Бюджетний студент може отримати стипендію за допомогою власного методу this.getScholarship.
 */
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);

    this.getScholarship = function() {
      if (!this.isDismiss && this.getAverageMark() >= 4) {
        return `Ви отримали 1400 грн. стипендії.`;
      } else {
        return `Нажаль Ви не отримали стипендії, ${ this.isDismiss ? `Вас було виключено!` : `Ваш середній бал ${this.getAverageMark()}.` }`;
      }
    }
  }
}

const student = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');

console.log(`Сукупна інформація про студента#1: `, student.getInfo());
console.log(`Поточний масив оцінок студента#1: `, student.marks);
console.log(`Додамо оцінку 5`);
student.marks = 5;
console.log(`Поточний масив оцінок студента#1: `, student.marks);
console.log(`Середній бал студента#1: `, student.getAverageMark());
console.log(`Виключимо студента!`);
student.dismiss();
console.log(`Поточний масив оцінок студента#1: `, student.marks);
console.log(`Додамо оцінку 3`);
student.marks = 3;
console.log(`Поточний масив оцінок студента#1: `, student.marks);
console.log(`Поновимо студента!`);
student.recover();
console.log(`Поточний масив оцінок студента#1: `, student.marks);
console.log(`Додамо оцінку 2`);
student.marks = 2;
console.log(`Поточний масив оцінок студента#1: `, student.marks);

console.log(`=====================================`);

const studentBudget = new BudgetStudent('Вищої Школи Математики м.Київ', 2, 'Олег Олегович Бонд');

console.log(`Сукупна інформація про студента#2: `, studentBudget.getInfo());
console.log(`Поточний масив оцінок студента#2: `, student.marks);
console.log(`Середній бал студента#2: `, studentBudget.getAverageMark());
console.log(`Чи отримаю стипендію?: `, studentBudget.getScholarship());
console.log(`Додамо оцінку 2`);
studentBudget.marks = 2;
console.log(`Додамо оцінку 3`);
studentBudget.marks = 3;
console.log(`Поточний масив оцінок студента#2: `, studentBudget.marks);
console.log(`Середній бал студента#2: `, studentBudget.getAverageMark());
console.log(`Чи отримаю стипендію?: `, studentBudget.getScholarship());
console.log(`Виключимо студента!`);
studentBudget.dismiss();
console.log(`Поточний масив оцінок студента#2: `, studentBudget.marks);
console.log(`Чи отримаю стипендію?: `, studentBudget.getScholarship());
