class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
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

class Student extends Person {

  constructor(name, surname, id, grades) {
    super(name, surname);
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
}


let std = new Student("Dwight", "Schrute", "12_qeB#", [5, 3, 5, 4, 4]);
console.log(std.fullname);
console.log(std.average);
std.fullname = "Jim Halpert";
console.log(std.fullname);
console.log(std.name);
console.log(std.surname);
