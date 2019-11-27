function Student(name, surname, id, grades) {

  this.name = name;
  this.surname = surname;
  this.id = id;
  this.grades = grades;

  this.fullname = () => {
    return this.name + " " + this.surname;
  };
  this.average = () => {
    let sum = 0;
    let i;
    for (i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return (sum / this.grades.length);

  };
}
let student1 = new Student("Anthony", "Hopkings", "s12345", [5, 3, 2, 5, 5, 4, 2, 4]);
console.log(student1.fullname());
console.log(student1.average());
