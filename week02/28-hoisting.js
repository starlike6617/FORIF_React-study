console.log(helloB());
console.log(helloA()); // ERROR!

let helloA = function () {
  return "Hello A!";
}; // 함수 표현식

console.log(helloA());

function helloB() {
  return "Hello B!";
} // 함수 선언식
