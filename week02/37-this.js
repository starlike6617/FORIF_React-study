let person = {
  name: "권기태",
  age: 21,
  say: function () {
    console.log(`Hello I'm ${this.name}`);
  },
};

person.say();
