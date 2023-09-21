let person = {
  name: "권기태",
  age: 21,
  say: function () {
    console.log(`Hello I'm ${this.name}`);
  },
};

console.log(`name : ${"name" in person}`);
console.log(`age : ${"age" in person}`);
console.log(`gender : ${"gender" in person}`);
