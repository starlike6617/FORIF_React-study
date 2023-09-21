let person = {
  name: "권기태", // 멤버
  age: 21, // 멤버
  say: function () {
    console.log("Hello");
  }, // 메서드
};

person.say();
person["say"]();
