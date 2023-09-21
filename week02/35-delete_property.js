let person = {
  name: "권기태",
  age: 21,
};

delete person.name;
delete person["age"];
console.log(person);

person.name = null;
console.log(person);
