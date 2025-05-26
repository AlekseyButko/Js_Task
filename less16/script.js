function Student(firstName, lastName, birthYear, marks) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.marks = marks || [];
  this.attendance = new Array(25); // довжина 25, але всі значення undefined
  this.attendanceIndex = 0;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageMark = function () {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  };

  this.present = function () {
    if (this.attendanceIndex >= 25) {
      console.warn("Усі заняття вже заповнені.");
      return;
    }
    this.attendance[this.attendanceIndex] = true;
    this.attendanceIndex++;
  };

  this.absent = function () {
    if (this.attendanceIndex >= 25) {
      console.warn("Усі заняття вже заповнені.");
      return;
    }
    this.attendance[this.attendanceIndex] = false;
    this.attendanceIndex++;
  };

  this.summary = function () {
    const avgMark = this.getAverageMark();
    const attended = this.attendance.filter(val => val === true).length;
    const total = this.attendance.filter(val => val !== undefined).length;
    const avgAttendance = total === 0 ? 0 : attended / total;

    if (avgMark > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    } else if (avgMark > 90 || avgAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Погано!";
    }
  };
}

const student1 = new Student("Олександр", "Коваленко", 2003, [100, 95, 90, 92]);
const student2 = new Student("Марія", "Іванчук", 2004, [70, 60, 75, 80]);
const student3 = new Student("Ірина", "Петренко", 2002, [88, 85, 90, 92]);

// Відвідування
for (let i = 0; i < 20; i++) student1.present();
for (let i = 0; i < 5; i++) student1.absent();

for (let i = 0; i < 12; i++) student2.present();
for (let i = 0; i < 13; i++) student2.absent();

for (let i = 0; i < 23; i++) student3.present();
for (let i = 0; i < 2; i++) student3.absent();

// Тестування
console.log(student1.firstName, student1.getAge(), student1.getAverageMark(), student1.summary());
console.log(student2.firstName, student2.getAge(), student2.getAverageMark(), student2.summary());
console.log(student3.firstName, student3.getAge(), student3.getAverageMark(), student3.summary());
