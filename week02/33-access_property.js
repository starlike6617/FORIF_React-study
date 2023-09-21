let personA = {
  name: "권기태",
  age: 21,
};

console.log(personB.name);
console.log(personB.age);

console.log(personB["name"]);
console.log(personB["age"]);

const name = "name";
console.log(personB[name]);

function getPropertyValue(key) {
  return personB[key];
}

console.log(getPropertyValue("name"));
