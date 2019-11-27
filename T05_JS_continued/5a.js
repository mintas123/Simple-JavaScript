let human = {
  name: 'Johny',
  surname: "Walker",
  age: 33,

  findBirthYear: function() {
    let year = new Date().getFullYear();
    return year - this.age;
  },

  toString: function() {
    return this.name + " " + this.surname + ", " + this.age + "years old.";
  },


};
console.log(human.findBirthYear());
console.log(human.toString());
