let personA = {
  name: "권기태",
  age: 21,
};

personA.location = "Korea";
personA["gender"] = "male";

personA.name = "권기뿡";
personA["age"] = 22;

console.log(personA);

// 객체를 const로 바꾼다면 에러가 날까?
const personB = {
  name: "권기태",
  age: 21,
};

personB.location = "Korea";
personB["gender"] = "male";

personB.name = "권기뿡";
personB["age"] = 22;

console.log(personB);
