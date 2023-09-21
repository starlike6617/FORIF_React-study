// let person = {
//     name: "권기태",
//     age: 21,
//     gender: "male",
//   };

//   const personKeys = Object.keys(person);
//   console.log(personKeys);

let person = {
  name: "권기태",
  age: 21,
  gender: "male",
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
  console.log(personKeys[i], personValues[i]);
}
