class Student {

  constructor(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
  }

  get average() {
    let sum = 0;
    let i;
    for (i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return (sum / this.grades.length);
  }

  get fullname() {
    return this.name + " " + this.surname;
  }
  set fullname(fullname) {
    let arr = fullname.split(" ");
    this.name = arr[0];
    this.surname = arr[1];
  }

}
let std = new Student("Dwight", "Schrute", "12_qeB#", [5, 3, 5, 4, 4]);
console.log(std.fullname);
console.log(std.average);
std.fullname = "Jim Halpert";
console.log(std.fullname);
console.log(std.name);
console.log(std.surname);
