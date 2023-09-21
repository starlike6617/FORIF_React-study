let chars = ["b", "c", "a"];
chars.sort();
console.log(chars);

// let numbers = [1, 0, 3, 2, 10, 30, 20];
// numbers.sort();
// console.log(numbers);

// 오름차순 정렬
let numbers = [1, 0, 3, 2, 10, 30, 20];
const cmp = (a, b) => {
  if (a > b) {
    return 1; // 반환값이 양수면 a를 b 뒤로 보냄
  } else if (a < b) {
    return -1; // 반환값이 음수면 a를 b 앞으로 보냄
  } else {
    return 0; // 반환값이 0이면 변경하지 않음
  }
};
numbers.sort(cmp);
console.log(numbers);

// 오름차순 정렬 (간단한 버전)
const cmp2 = (a, b) => a - b;
numbers.sort(cmp2);
console.log(numbers);

// 내림차순 정렬
const cmp3 = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};
numbers.sort(cmp3);
console.log(numbers);
